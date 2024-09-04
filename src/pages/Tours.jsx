import { Box, Button, Card, CardContent, CardMedia, Container, duration, Grid, Typography } from '@mui/material'
import React from 'react'
import { TourForm } from '../components/Forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarDays, faClock, faColonSign, faPlaneDeparture, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const desc = 'Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.'
const tourList = [
    {
        id: 1,
        images: ['/tours/africa-tour.jpg', '/tours/africa-tour1.jpg', '/tours/africa-tour2.jpg', '/tours/africa-tour3.jpg', '/tours/africa-tour4.jpg'],
        title: 'Africa – Amazing Safari',
        duration: '5 Hours',
        availiability: 'Jan 16 - Dec 16’',
        location: 'Africa',
        maxPeople: 40,
        minAge: 12,
        desc,
        price: 100,
        ratings: 5,
        reviews: 342,
        kkkk: 'dkdkdk',
        includes: ['Air fares', '3 Nights Hotel Accomodation', 'Tour Guide', 'Entrance Fees', 'All transportation in destination location'],
        excludes: ['Guide Service Fee', 'Driver Service Fee', 'Any Private Expenses', 'Room Service Fees', 'Optional Activities'],
        itinerary: [
            { day: 1, title: 'Lorem ipsum dolor sit amet', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro' },
            { day: 2, title: 'Lorem ipsum dolor sit amet', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro' },
            { day: 3, title: 'Lorem ipsum dolor sit amet', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro' },
            { day: 4, title: 'Lorem ipsum dolor sit amet', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro' },
            { day: 5, title: 'Lorem ipsum dolor sit amet', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora eaque sequi delectus amet deleniti voluptatem officia porro' },
        ],
        faqs: [
            { title: 'I am a solo traveller, is there a single supplement?', desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.' },
            {
                title: 'Which currency is most widely accepted on this tour?',
                desc: `– Austria – Euro (EUR)
              – France – Euro (EUR)
              – Germany – Euro (EUR)
              – Italy – Euro (EUR)
              – Netherlands – Euro (EUR)
              – Switzerland – Swiss franc (CHF)
              – United Kingdom – Pound sterling (£)`
            },
            {
                title: 'Should I book pre/post tour accommodation?', desc: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.

                It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.`
            },
            { title: 'What is cancellation policy?', desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.' },
        ]
    },
    {
        id: 2,
        images: ['/tours/dubai-tour.jpg', '/tours/africa-tour1.jpg', '/tours/africa-tour2.jpg', '/tours/africa-tour3.jpg', '/tours/africa-tour4.jpg'],
        title: 'Dubai – Stunning Places',
        duration: '8 Hours',
        availiability: 'Jan 16 - Dec 16’',
        location: 'Dubai',
        desc,
        price: 1200,
        ratings: 5,
        reviews: 1932
    },
    {
        id: 3,
        images: ['/tours/venice-tour.jpg', '/tours/africa-tour1.jpg', '/tours/africa-tour2.jpg', '/tours/africa-tour3.jpg', '/tours/africa-tour4.jpg'],
        title: 'Venice  – Rome and Milan ',
        duration: '7 Days',
        availiability: 'Jan 16 - Dec 16’',
        location: 'San Francisco',
        desc,
        price: 3500,
        ratings: 5,
        reviews: 1139
    },
]

const Tours = () => {

    return <>
        <Box sx={{ overflow: 'hidden' }}>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '100vh',
                        sm: '56vh',
                    },
                    backgroundImage: 'url(/tours/bg-tour.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                    <Container disableGutters>
                        <Box sx={{ marginTop: { md: '32px' }, padding: '16px', backgroundColor: 'white', width: '100%', borderRadius: '10px' }}>
                            <TourForm />
                        </Box>
                    </Container>
                </Box>

            </Box>
            <Box sx={{ marginY: '100px', paddingX: '12px' }}>
                <Container disableGutters >
                    <Box>
                        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: { sm: 'center', md: 'flex-start' } }}>
                            {tourList && tourList.map((item, i) => <Grid key={i} item sm={9} md={6} lg={4} display={'flex'} alignItems={'center'}>
                                <ToursCard item={item} />
                            </Grid>)}

                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    </>
}

export default Tours

const ToursCard = ({ item }) => {

    const navigate = useNavigate()
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(item.ratings);
        const hasHalfStar = item.ratings % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} color={'rgb(246, 213, 23)'} fontSize={'12px'} />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key={'half'} icon={faStarHalfAlt} color={'rgb(246, 213, 23)'} fontSize={'12px'} />);
        }

        return stars;
    };

    const handleTourDetails = () => {
        navigate(`/tour-details/${item.id}`, { state: { tour: item } })
    }
    return <>
        <Card>
            <CardMedia
                component="img"
                image={item.images[0]}
                alt={item.title}
            />
            <CardContent>
                <Box sx={{ padding: {} }}>
                    <Grid container spacing={2}>
                        <Grid item xs={9} >
                            <Box sx={{ borderRight: '1px solid gainsboro' }}>
                                <Typography sx={{
                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                    fontSize: '20px',
                                    textTransform: 'uppercase',
                                    fontWeight: 900
                                }}>{item.title}</Typography>

                                <Box sx={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>

                                    <FontAwesomeIcon icon={faClock} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                    <Typography color={'gray'}>
                                        {item.duration}
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>

                                    <FontAwesomeIcon icon={faCalendarDays} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                    <Typography color={'gray'}>
                                        Availiability: {item.availiability}
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>

                                    <FontAwesomeIcon icon={faPlaneDeparture} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                    <Typography color={'gray'}>
                                        {item.location}
                                    </Typography>
                                </Box>

                                <Typography sx={{ color: 'gray', marginTop: '14px' }}>
                                    {item.desc}
                                </Typography>
                            </Box>



                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography color={'gray'}>From</Typography>
                                <Typography sx={{ color: '#cd2c22', fontFamily: 'ArcaMajora, Arial, sans-serif', fontSize: '24px', fontWeight: 900 }}>${item.price}</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    {renderStars()}
                                </Box>

                                <Typography textAlign={'center'} color={'gray'} marginTop={'4px'} fontSize={'12px'}>({item.reviews}) Reviews</Typography>

                                <Button variant='contained'
                                    onClick={handleTourDetails}
                                    sx={{
                                        marginTop: '12px',
                                        backgroundColor: '#cd2c22',
                                        fontSize: '12px',
                                        paddingY: '10px',
                                        paddingX: '16px',
                                        '&:hover': { backgroundColor: '#cd2c22' }
                                    }}>VIEW DETAILS</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card >
    </>
}