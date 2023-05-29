import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Example from '../components/CaroDisplay';
import { Link } from 'react-scroll';


const steps = [
    {
        label: 'Hall rentage and decoration',
        target: 'halls',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.
              For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.
              `,
    },
    {
        label: 'Food and Refreshments',
        target: 'foods',
        description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.
    For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.
    `,
    },


    {
        label: 'Photography and live event coverage',
        target: 'photos',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },

    {
        label: 'Car hire services',
        target: 'cars',
        description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.
    For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.
    `,
    },


];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ backgroundColor: 'secondary.main' }}>
            <Box margin='' >
                <Grid container spacing={1} sx={{ padding: '10px' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Stepper activeStep={activeStep} orientation="vertical" >
                            {steps.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel >
                                        <Link
                                            activeClass='active'
                                            to={step.target}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={1000}
                                            delay={500}
                                        >
                                            <Typography color='info.main'
                                                sx={{ fontFamily: 'PT Sans, sans-serif', fontStyle: "italic" }} className='label'>
                                                {step.label}
                                            </Typography>
                                        </Link>

                                    </StepLabel>
                                    <StepContent>
                                        <Typography color='info.main'
                                            sx={{ fontFamily: 'PT Sans, sans-serif', fontStyle: "italic" }}>
                                            {step.description}</Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    size='small'
                                                >
                                                    continue
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    size='small'
                                                >
                                                    Back
                                                </Button>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3, backgroundColor: 'secondary.main' }} >
                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} size='small'>
                                    Read Again
                                </Button>
                            </Paper>
                        )}
                    </Grid>
                    {/* Carousel component */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Example />
                    </Grid>
                </Grid>

            </Box>

        </Box>
    );
}