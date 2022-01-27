import classes from './Services.module.css';

const DUMMY_SERVICES = [
    {
        id: "1",
        img: "https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",
        title: "The TLD",
        description: "Does the domain extension math the language of the domain name?"
    },
    {
        id: "2",
        img: "https://cdn3.iconfinder.com/data/icons/construction-138/200/Ruler-512.png",
        title: "Domain Length",
        description: "Is the domain short enough to remember?"
    },
    {
        id: "3",
        img: "https://www.clipartmax.com/png/middle/276-2767713_earth-grid-symbol-vector-world-globe-clipart-black-and-white.png",
        title: "Language",
        description: "How complex is actually the domain name?"
    },
    {
        id: "4",
        img: "https://www.kindpng.com/picc/m/401-4017010_transparent-background-certificate-clipart-transparent-hd-png-download.png",
        title: "International recognition",
        description: "Can the domain name be used on an international scale?"
    },
    {
        id: "5",
        img: "https://www.nicepng.com/png/detail/301-3012795_find-on-our-magnifying-glass-computer-icon-png.png",
        title: "Search engine",
        description: "Does the domain follow search engine guidelines?"
    },
    {
        id: "6",
        img: "https://toppng.com/uploads/preview/jpg-advertising-clipart-person-megaphone-announce-11563365264iobpsdbdn3.png",
        title: "Adversting Potential",
        description: "Could the domain be used for adversting campaings?"
    },
    {
        id: "7",
        img: "https://a.storyblok.com/f/119179/512x512/c4b8312f7f/price.png",
        title: "Sales Opportunities",
        description: "Can the domain be used on an international scale?"
    },
    {
        id: "8",
        img: "https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",
        title: "The TLD",
        description: "Does the domain extension math the language of the domain name?"
    },
    {
        id: "9",
        img: "https://www.nicepng.com/png/detail/301-3012795_find-on-our-magnifying-glass-computer-icon-png.png",
        title: "Search engine",
        description: "Does the domain follow search engine guidelines?"
    }
];

const Services = () => {
    const servicesItem = DUMMY_SERVICES.map((service) => {
        return <div className={classes.serviceItem} key={service.id} >
            <img src={service.img} alt={`${service.title} logo`} className={classes.logo} />
            <div style={{width: '65%', marginLeft: '15px'}}>
                <h1 className={classes.title} >{service.title}</h1>
                <p className={classes.description}>{service.description}</p>
            </div>
        </div>
    });

    return (
        <div className={classes.services}>
            {servicesItem}
        </div>
    );
};

export default Services;