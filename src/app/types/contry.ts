type Country ={
    name:{
        common: string;
        official: string;
    };

    flags:{
        png: string;
    };

    cca2: string;

    capital: string;

    languages:{
        [key:string]: string;
    }
        
    

    population: string;

    area: string;

    flag:string;

    timezones:[

    ]
};
export default Country;