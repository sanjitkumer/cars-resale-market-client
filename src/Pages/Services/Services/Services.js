import React from 'react';
import AvailableServices from '../AvailableServices/AvailableServices';
import ServiceBanner from '../ServiceBanner/ServiceBanner';

const Services = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <AvailableServices></AvailableServices>
        </div>
    );
};

export default Services;
