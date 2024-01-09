import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';

function SpecialsCard() {
    const specialMenus = [
        {
            image: '/assets/greek salad.jpg',
            title: 'Greek Salad',
            price: '$12.99',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.',
            order: 'Order a delivery'
        },
        {
            image: '/assets/bruchetta.svg',
            title: 'Bruschetta',
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.',
            order: 'Order a delivery'
        },
        {
            image: '/assets/lemon dessert.jpg',
            title: 'Lemon Dessert',
            price: '$5.00',
            description: 'This comes straight from Grandma\'s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.',
            order: 'Order a delivery'
        }
    ];

    const specialMenuCard = specialMenus.map(menu => {
        return (
            <article className='sub-article' key={menu.title}>
                <div className='sub-article-img-section'>
                    <img src={menu.image} height="250" alt="Italian food" />
                </div>
                <div className='sub-article-content-section'>
                    <div className="sub-article-title">
                        <h3>
                            {menu.title}
                        </h3>
                        <p>{menu.price}</p>
                    </div>
                    <p className="sub-article-desc">{menu.description}</p>
                    <p className="sub-order-delivery">{menu.order}
                        <PedalBikeOutlinedIcon style={{ marginLeft: 10 }}></PedalBikeOutlinedIcon></p>
                </div>
            </article>
        )
    })
    return (
        <section className="sub-article-section">
            {specialMenuCard}
        </section>
    );
}

export default SpecialsCard;