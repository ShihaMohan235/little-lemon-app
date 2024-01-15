import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingPage, { initializeTimes, updateTimes } from '../pages/BookingPage';
import BookingForm from '../components/BookingForm';

test('Renders the Booking Form heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the expected array of times', () => {
  const expectedTimes = [
    '17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'
  ];
  const result = initializeTimes;
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same value provided in the state', () => {
  const expectedTimes = ['17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'];
  const newTimes = ['18:00 PM', '19:00 PM', '22:00 PM'];
  
  const result = updateTimes(newTimes, expectedTimes);

  expect(result).toEqual(newTimes);
});

test('Bookings Form can be submitted by the user', async () => {
  const mockDispatch = jest.fn();
  const props = {
    availableTimes: ['18:00 PM', '19:00 PM', '22:00 PM'],
    dispatch: mockDispatch
  }
  const onSubmitMock = jest.fn();
  render(<BookingForm onSubmit={onSubmitMock} {...props} />);

  fireEvent.change(screen.getByTestId('res-date'), { target: { value: '2023-01-18' } });
  fireEvent.change(screen.getByTestId('res-time'), { target: { value: '18:00 PM' } });
  fireEvent.change(screen.getByTestId('guests'), { target: { value: "5" } });
  fireEvent.change(screen.getByTestId('occasion'), { target: { value: 'Birthday' } });
  fireEvent.change(screen.getByTestId('requirements'), { target: { value: '' } });

  fireEvent.click(screen.getByText('Make Your reservation'));

  await waitFor(() => {
    expect(onSubmitMock).toHaveBeenCalledWith({
      date: '2023-01-18',
      time: '18:00 PM',
      guestNumber: '5',
      occasion: 'Birthday',
      requirements: ''
    });
  });
});