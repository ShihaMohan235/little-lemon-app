import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingPage, { initializeTimes, updateTimes } from '../pages/BookingPage';
import BookingForm from '../components/BookingForm';


describe('BookingForm Unit tests', () => {
  test('Renders the Booking Form heading', () => {
    render(<Router><BookingPage /></Router>);
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

    const result = updateTimes(expectedTimes, { type: 'UPDATE_TIMES', date: '2023-01-18', times: newTimes });

    expect(result).toEqual(newTimes);
  });

  // Form field validations
  test('renders date input with required and min attributes', () => {
    render(<BookingForm availableTimes={['18:00 PM', '19:00 PM', '22:00 PM']} />);
    const dateInput = screen.getByTestId('res-date');

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', expect.any(String));
    expect(dateInput).toHaveAttribute('required');
  });

  test('renders time select with required attribute', () => {
    render(<BookingForm availableTimes={['18:00 PM', '19:00 PM', '22:00 PM']} />);
    const timeSelect = screen.getByTestId('res-time');

    expect(timeSelect).toHaveAttribute('required');
  });

  test('renders guests input with required, min, and max attributes', () => {
    render(<BookingForm  availableTimes={['18:00 PM', '19:00 PM', '22:00 PM']} />);
    const guestsInput = screen.getByTestId('guests');

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
  });

  test('renders occasion select with required attribute', () => {
    render(<BookingForm availableTimes={['18:00 PM', '19:00 PM', '22:00 PM']} />);
    const occasionSelect = screen.getByTestId('occasion');

    expect(occasionSelect).toHaveAttribute('required');
  });

  test('renders requirements textarea without required attribute', () => {
    render(<BookingForm availableTimes={['18:00 PM', '19:00 PM', '22:00 PM']} />);
    const requirementsTextarea = screen.getByTestId('requirements');

    expect(requirementsTextarea).not.toHaveAttribute('required');
  });
  // end of form field validations

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
    fireEvent.change(screen.getByTestId('guests'), { target: { value: '5' } });
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

  test('does not submit the form with invalid data', () => {
    const mockDispatch = jest.fn();
    const props = {
      availableTimes: ['18:00 PM', '19:00 PM', '22:00 PM'],
      dispatch: mockDispatch
    }
    const onSubmitMock = jest.fn();
    render(<BookingForm onSubmit={onSubmitMock} {...props} />);
    fireEvent.change(screen.getByTestId('res-date'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('res-time'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('guests'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('occasion'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('requirements'), { target: { value: '' } });

    const submitBtn = screen.getByText('Make Your reservation');
    fireEvent.click(submitBtn);

    expect(submitBtn).toHaveAttribute('disabled');
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});