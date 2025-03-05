
type DistrictBuilding = {
    gym: boolean;
    school: boolean;
    store: boolean;
};

type City = DistrictBuilding[];

const city: City = [
    {
        gym: true,
        school: false,
        store: false,
    },
    {
        gym: false,
        school: false,
        store: false,
    },
    {
        gym: true,
        school: false,
        store: true,
    },
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: false,
        store: true,
    },
];

function findDistrictWithMostBuildings(city: City): number {
    let maxBuildings = 0;
    let districtIndex = -1;

    city.forEach((district, index) => {
        const numBuildings = Object.values(district).filter(value => value).length;

        if (numBuildings > maxBuildings) {
            maxBuildings = numBuildings;
            districtIndex = index;
        }
    });

    return districtIndex;
}

