import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8799450953134!2d77.57148311473537!3d12.915436919602913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1577546a5c45%3A0x96c79157f4cb776!2sBanashankari+Metro+Station.%2C+Kanakapura+Rd%2C+Sarbandapalya%2C+Banashankari+Temple+Ward%2C+Bengaluru%2C+Karnataka+560078!5e0!3m2!1sen!2sin!4v1550217106783" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            >
            </iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    );
};

export default Location;