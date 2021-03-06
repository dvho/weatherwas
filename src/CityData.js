const CityData = [

    {
        cityGmtDifferential: 0,
        woeid: "44418",
        country: "United Kingdom",
        city: "London",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5080281.32427863!2d-4.586191358541446!3d51.557121246341474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2sus!4v1554206968491!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2487956",
        country: "United States",
        city: "San Francisco",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6457679.042604456!2d-126.92288553255696!3d37.786205689716894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1554181583078!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2459115",
        country: "United States",
        city: "New York",
        state: "New York",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6194392.599281704!2d-78.46320802075621!3d40.70467950320331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1554174821325!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 11,
        woeid: "1105779",
        country: "Australia",
        city: "Sydney",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27006595.373749305!2d132.941140734159!3d-34.281611338304465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney+NSW%2C+Australia!5e0!3m2!1sen!2sus!4v1554210165809!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2471217",
        country: "United States",
        city: "Philadelphia",
        state: "Pennsylvania",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129287.9149412345!2d-77.21993949738393!3d40.00967096740949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C+PA!5e0!3m2!1sen!2sus!4v1554175794114!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "28218",
        country: "United Kingdom",
        city: "Manchester",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4860348.19422484!2d-6.70785562409263!3d53.50032084974938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C+UK!5e0!3m2!1sen!2sus!4v1554207245320!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2424766",
        country: "United States",
        city: "Houston",
        state: "Texas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7089551.822736488!2d-99.88647882618768!3d29.83881196561618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C+TX!5e0!3m2!1sen!2sus!4v1554176090010!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "12723",
        country: "United Kingdom",
        city: "Birmingham",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4973637.488008223!2d-6.3481355607757735!3d52.505675763641094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C+UK!5e0!3m2!1sen!2sus!4v1554207276895!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2442047",
        country: "United States",
        city: "Los Angeles",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6770431.396305118!2d-122.89638595142586!3d34.04708498670446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1554181616861!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "638242",
        country: "Germany",
        city: "Berlin",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4970412.831123556!2d8.940160321874062!3d52.53416892183638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C+Germany!5e0!3m2!1sen!2sus!4v1554210057237!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2379574",
        country: "United States",
        city: "Chicago",
        state: "Illinois",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6085494.529660184!2d-92.21599607287192!3d41.86203222945906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C+IL!5e0!3m2!1sen!2sus!4v1554176883364!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1118370",
        country: "Japan",
        city: "Tokyo",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13288438.211846992!2d130.78880935187806!3d35.59695823600454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C+Japan!5e0!3m2!1sen!2sus!4v1554210031439!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2151330",
        country: "China",
        city: "Beijing",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12509097.169576239!2d107.42041600402553!3d40.05357401196534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C+China!5e0!3m2!1sen!2sus!4v1554209748281!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "116545",
        country: "Mexico",
        city: "Mexico City",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7710089.694157749!2d-103.63960517822446!3d19.33915681487109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0036b1352927%3A0xdefd9e4ee8d18a5b!2sMexico+City%2C+Mexico!5e0!3m2!1sen!2sus!4v1554209990040!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "15015370",
        country: "Japan",
        city: "Osaka",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13421481.556682631!2d126.50638819694112!3d34.78759963652194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C+Japan!5e0!3m2!1sen!2sus!4v1554210207752!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "13963",
        country: "United Kingdom",
        city: "Bristol",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5086982.539099277!2d-7.075297141280241!3d51.49710271512057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871836681b3d861%3A0x8ee4b22e4b9ad71f!2sBristol%2C+UK!5e0!3m2!1sen!2sus!4v1554207306774!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "12586539",
        country: "India",
        city: "Mumbai",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15437478.021317761!2d63.89630460459163!3d19.155174347656935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C+Maharashtra%2C+India!5e0!3m2!1sen!2sus!4v1554210249782!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "21125",
        country: "United Kingdom",
        city: "Glasgow",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4583119.640526028!2d-8.716643802984114!3d55.88259248337246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C+UK!5e0!3m2!1sen!2sus!4v1554207335661!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "727232",
        country: "Netherlands",
        city: "Amsterdam",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4987516.140488877!2d0.4141074888775696!3d52.38291923611261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C+Netherlands!5e0!3m2!1sen!2sus!4v1554210275716!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "1582504",
        country: "South Africa",
        city: "Johannesburg",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14655174.215817755!2d19.057367776047787!3d-26.264149609756593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C+South+Africa!5e0!3m2!1sen!2sus!4v1554210312460!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -3,
        woeid: "455825",
        country: "Brazil",
        city: "Rio de Janeiro",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15043623.663781622!2d-52.42986199352576!3d-22.995862916571948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio+de+Janeiro%2C+State+of+Rio+de+Janeiro%2C+Brazil!5e0!3m2!1sen!2sus!4v1554210401096!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2151849",
        country: "China",
        city: "Shanghai",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13960214.788280819!2d112.49546868249739!3d31.32431448246073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2sShanghai%2C+China!5e0!3m2!1sen!2sus!4v1554209774145!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "28743736",
        country: "India",
        city: "New Delhi",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14344693.90252277!2d68.2271641448251!3d28.6260894041752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew+Delhi%2C+Delhi%2C+India!5e0!3m2!1sen!2sus!4v1554210494277!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 7,
        woeid: "1047378",
        country: "Indonesia",
        city: "Jakarta",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258651.714599606!2d97.6905364303605!3d-5.799415551332714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%2C+Indonesia!5e0!3m2!1sen!2sus!4v1554210538963!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1132599",
        country: "South Korea",
        city: "Seoul",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12934143.872863783!2d118.01150591950139!3d37.67858249938819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2sSeoul%2C+South+Korea!5e0!3m2!1sen!2sus!4v1554210604787!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -3,
        woeid: "455827",
        country: "Brazil",
        city: "São Paulo",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14956231.845156254!2d-55.57882827875256!3d-23.76791874413946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o+Paulo%2C+State+of+S%C3%A3o+Paulo%2C+Brazil!5e0!3m2!1sen!2sus!4v1554210632631!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "2122265",
        country: "Russia",
        city: "Moscow",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9212650.372317195!2d28.41601491208967!3d55.68581965861342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C+Russia!5e0!3m2!1sen!2sus!4v1554210662383!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2165352",
        country: "Hong Kong",
        city: "Hong Kong",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556050.886087114!2d109.64230051703949!3d22.37333177355532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong+Kong!5e0!3m2!1sen!2sus!4v1554178549745!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2487889",
        country: "United States",
        city: "San Diego",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6864472.600406041!2d-121.59371931735004!3d32.850725116881705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan+Diego%2C+CA!5e0!3m2!1sen!2sus!4v1554181647005!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2488042",
        country: "United States",
        city: "San Jose",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6497806.925528988!2d-126.30181594977337!3d37.324576531216415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan+Jose%2C+CA!5e0!3m2!1sen!2sus!4v1554181670779!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2388929",
        country: "United States",
        city: "Dallas",
        state: "Texas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6864773.475243867!2d-101.21628358399637!3d32.84683567927521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C+TX!5e0!3m2!1sen!2sus!4v1554178835583!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2427032",
        country: "United States",
        city: "Indianapolis",
        state: "Indiana",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6277042.866798394!2d-90.61695339846098!3d39.80783660951904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C+IN!5e0!3m2!1sen!2sus!4v1554181538994!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2487796",
        country: "United States",
        city: "San Antonio",
        state: "Texas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7111372.497603638!2d-102.99937725265428!3d29.50616003420636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan+Antonio%2C+TX!5e0!3m2!1sen!2sus!4v1554178896877!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "3534",
        country: "Canada",
        city: "Montréal",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5718434.609384539!2d-78.2155216243251!3d45.586435627923436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C+QC%2C+Canada!5e0!3m2!1sen!2sus!4v1554209229551!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2428344",
        country: "United States",
        city: "Jacksonville",
        state: "Florida",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7049882.172995245!2d-86.16802097495307!3d30.37011998660252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C+FL!5e0!3m2!1sen!2sus!4v1554179073918!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2357536",
        country: "United States",
        city: "Austin",
        state: "Texas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7052522.919838272!2d-102.23890758142569!3d30.333475368876098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C+TX!5e0!3m2!1sen!2sus!4v1554178938268!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "924938",
        country: "Ukraine",
        city: "Kiev",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5205204.537420973!2d26.047919416176015!3d50.42985346157026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C+Ukraine%2C+02000!5e0!3m2!1sen!2sus!4v1554209433621!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2471390",
        country: "United States",
        city: "Phoenix",
        state: "Arizona",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803405.959154686!2d-116.609735031831!3d33.63187553528685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C+AZ!5e0!3m2!1sen!2sus!4v1554179109280!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "766273",
        country: "Spain",
        city: "Madrid",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6216451.66231952!2d-8.16511562111839!3d40.46692860336615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C+Spain!5e0!3m2!1sen!2sus!4v1554209514810!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "4118",
        country: "Canada",
        city: "Toronto",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5908921.515831432!2d-83.80623937567124!3d43.68528130271738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C+ON%2C+Canada!5e0!3m2!1sen!2sus!4v1554209266972!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2406080",
        country: "United States",
        city: "Fort Worth",
        state: "Texas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6866309.225440987!2d-101.77406151169997!3d32.82697651565513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort+Worth%2C+TX!5e0!3m2!1sen!2sus!4v1554178960924!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2161838",
        country: "China",
        city: "Guangzhou",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15019910.745600808!2d104.24356506074128!3d23.207749433949168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402f895a35c2bc7%3A0xe59e075adeae415!2sGuangzhou%2C+Guangdong%2C+China!5e0!3m2!1sen!2sus!4v1554209667100!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2383660",
        country: "United States",
        city: "Columbus",
        state: "Ohio",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258450.788308676!2d-87.47501572186384!3d40.01103471184268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C+OH!5e0!3m2!1sen!2sus!4v1554179176650!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2449323",
        country: "United States",
        city: "Memphis",
        state: "Tennessee",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6680614.360472185!2d-94.45535739768134!3d35.156153614010236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e1eea439745%3A0xd193f315601ab6fe!2sMemphis%2C+TN!5e0!3m2!1sen!2sus!4v1554179250991!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2514815",
        country: "United States",
        city: "Washington DC",
        state: "District of Columbia",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179532.6440898753!2d-79.25592135866901!3d38.90083294872369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C+DC!5e0!3m2!1sen!2sus!4v1554179292871!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "615702",
        country: "France",
        city: "Paris",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5372865.228759104!2d-2.1377378409150176!3d48.88739175262179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C+France!5e0!3m2!1sen!2sus!4v1554210725324!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "676757",
        country: "Germany",
        city: "Munich",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5448036.514878286!2d7.056932181971493!3d48.18399735588472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C+Germany!5e0!3m2!1sen!2sus!4v1554210748098!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 10,
        woeid: "1100661",
        country: "Australia",
        city: "Brisbane",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28923293.399871156!2d134.98693802147346!3d-27.75815431328809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane+QLD%2C+Australia!5e0!3m2!1sen!2sus!4v1554210790186!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "721943",
        country: "Italy",
        city: "Rome",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078142.121960814!2d8.05054307702366!3d41.93922848988765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C+Metropolitan+City+of+Rome%2C+Italy!5e0!3m2!1sen!2sus!4v1554210882431!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2451822",
        country: "United States",
        city: "Milwaukee",
        state: "Wisconsin",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5967517.113829089!2d-92.45196387498984!3d43.087138294925225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880502d7578b47e7%3A0x445f1922b5417b84!2sMilwaukee%2C+WI!5e0!3m2!1sen!2sus!4v1554179394683!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "13527",
        country: "United Kingdom",
        city: "Bradford",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4823051.967313458!2d-6.238722713123634!3d53.82497186751562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795f7ae9c21919%3A0x8fe0edd83227194f!2sBradford%2C+UK!5e0!3m2!1sen!2sus!4v1554207371588!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "26734",
        country: "United Kingdom",
        city: "Liverpool",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4867229.720655684!2d-7.400457153193933!3d53.440270943409956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool%2C+UK!5e0!3m2!1sen!2sus!4v1554207398451!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "38952",
        country: "United Kingdom",
        city: "Wakefield",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4836993.672549298!2d-5.994599748242944!3d53.70377228026755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795d6047fb0b31%3A0x71697d7cd4b2dac8!2sWakefield%2C+UK!5e0!3m2!1sen!2sus!4v1554207439745!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "2344116",
        country: "Turkey",
        city: "Istanbul",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6163704.808422335!2d24.52655898920511!3d41.03353630941474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C+Turkey!5e0!3m2!1sen!2sus!4v1554210925652!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2397816",
        country: "United States",
        city: "El Paso",
        state: "Texas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6941824.1130190035!2d-110.9093305340868!3d31.836903808737677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e73f8bc5fe3b69%3A0xe39184e3ab9d0222!2sEl+Paso%2C+TX!5e0!3m2!1sen!2sus!4v1554178996873!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2490383",
        country: "United States",
        city: "Seattle",
        state: "Washington",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5505381.437097321!2d-126.82620532267354!3d47.642175181258985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C+WA!5e0!3m2!1sen!2sus!4v1554179435098!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2358820",
        country: "United States",
        city: "Baltimore",
        state: "Maryland",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161941.4385889415!2d-78.86214656132967!3d39.29202779576343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C+MD!5e0!3m2!1sen!2sus!4v1554179616924!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2436704",
        country: "United States",
        city: "Las Vegas",
        state: "Nevada",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6597810.928086707!2d-119.65949435134648!3d36.152259024000834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas+Vegas%2C+NV!5e0!3m2!1sen!2sus!4v1554182499182!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 11,
        woeid: "1103816",
        country: "Australia",
        city: "Melbourne",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25605465.51794648!2d127.07401700211064!3d-38.42605574086352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC%2C+Australia!5e0!3m2!1sen!2sus!4v1554210962683!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -3,
        woeid: "468739",
        country: "Argentina",
        city: "Buenos Aires",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13431632.701333702!2d-67.41262229206345!3d-34.72517120090019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos+Aires%2C+Argentina!5e0!3m2!1sen!2sus!4v1554211080776!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2367105",
        country: "United States",
        city: "Boston",
        state: "Massachusetts",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6039535.793864076!2d-75.4542758820894!3d42.34269207558331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C+MA!5e0!3m2!1sen!2sus!4v1554182526397!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2457170",
        country: "United States",
        city: "Nashville",
        state: "Tennessee",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6592619.71682057!2d-91.26973504796062!3d36.21391651970518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C+TN!5e0!3m2!1sen!2sus!4v1554182559051!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "19344",
        country: "United Kingdom",
        city: "Edinburgh",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4572979.446881462!2d-7.689498960919239!3d55.96843313378519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2sEdinburgh%2C+UK!5e0!3m2!1sen!2sus!4v1554207466320!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "1098081",
        country: "Australia",
        city: "Perth",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27577639.690598108!2d97.9657940598632!3d-32.461694473311645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth+WA%2C+Australia!5e0!3m2!1sen!2sus!4v1554211106574!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 5,
        woeid: "2211096",
        country: "Pakistan",
        city: "Karachi",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14777150.83665711!2d58.171880595687625!3d25.28057988089714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C+Karachi+City%2C+Sindh%2C+Pakistan!5e0!3m2!1sen!2sus!4v1554211142659!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "656958",
        country: "Germany",
        city: "Hamburg",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4850463.269159816!2d5.443418987212963!3d53.58649777169028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C+Germany!5e0!3m2!1sen!2sus!4v1554211167955!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 4,
        woeid: "1940345",
        country: "United Arab Emirates",
        city: "Dubai",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14791148.806357661!2d46.24457266688832!3d25.165415043095983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai+-+United+Arab+Emirates!5e0!3m2!1sen!2sus!4v1554211204970!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "26042",
        country: "United Kingdom",
        city: "Leeds",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4822015.478867795!2d-6.020093769276465!3d53.833974891987445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds%2C+UK!5e0!3m2!1sen!2sus!4v1554207489110!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "34503",
        country: "United Kingdom",
        city: "Sheffield",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4869128.672793245!2d-5.983873996774988!3d53.42369200057299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C+UK!5e0!3m2!1sen!2sus!4v1554207550517!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 11,
        woeid: "1099805",
        country: "Australia",
        city: "Adelaide",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26628663.54641789!2d120.62353147081906!3d-35.440698373430756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide+SA%2C+Australia!5e0!3m2!1sen!2sus!4v1554211250161!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2378426",
        country: "United States",
        city: "Charlotte",
        state: "North Carolina",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6674473.198762629!2d-85.32498843136122!3d35.23086925603806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C+NC!5e0!3m2!1sen!2sus!4v1554182586258!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "2391585",
        country: "United States",
        city: "Detroit",
        state: "Michigan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6035767.328477221!2d-87.58379793440217!3d42.38190800898896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C+MI!5e0!3m2!1sen!2sus!4v1554182619760!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2442327",
        country: "United States",
        city: "Louisville",
        state: "Kentucky",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6419891.661240639!2d-90.16110272067932!3d38.21656574558684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4d3b4282071fd32!2sLouisville%2C+KY!5e0!3m2!1sen!2sus!4v1554182666967!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "753692",
        country: "Spain",
        city: "Barcelona",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6127006.912841698!2d-2.336708351951609!3d41.42397423578305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C+Spain!5e0!3m2!1sen!2sus!4v1554209539027!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2391279",
        country: "United States",
        city: "Denver",
        state: "Colorado",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6278453.0885964995!2d-109.33931611821616!3d39.792388634730976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C+CO!5e0!3m2!1sen!2sus!4v1554182699934!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2475687",
        country: "United States",
        city: "Portland",
        state: "Oregon",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5719905.896192765!2d-127.13870834311085!3d45.57199102439826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C+OR!5e0!3m2!1sen!2sus!4v1554182730021!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2464592",
        country: "United States",
        city: "Oklahoma City",
        state: "Oklahoma",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6651453.03938241!2d-101.96374105243446!3d35.509722625253616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad8a547ef8d281%3A0x33a21274d14f3a9d!2sOklahoma+City%2C+OK!5e0!3m2!1sen!2sus!4v1554182761060!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "15127",
        country: "United Kingdom",
        city: "Cardiff",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5083215.639376144!2d-7.689626509257803!3d51.530846595203215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e02d434ec53f5%3A0x143406db6586670e!2sCardiff%2C+UK!5e0!3m2!1sen!2sus!4v1554207580875!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295386",
        country: "India",
        city: "Kolkata",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15069784.53600582!2d79.34587437863921!3d22.759939589868406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C+West+Bengal%2C+India!5e0!3m2!1sen!2sus!4v1554211292191!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "1521894",
        country: "Egypt",
        city: "Cairo",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7070352.289165782!2d26.77212584791872!3d30.085007439121032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C+Cairo+Governorate%2C+Egypt!5e0!3m2!1sen!2sus!4v1554211332837!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2512636",
        country: "United States",
        city: "Virginia Beach",
        state: "Virginia",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6540919.965187245!2d-80.4970708075035!3d36.823106712853054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bac1e8fc1527a7%3A0x4161080a32e0173!2sVirginia+Beach%2C+VA!5e0!3m2!1sen!2sus!4v1554180026845!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "1290062",
        country: "Democratic Republic of Congo",
        city: "Kinshasa",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293724.065728068!2d6.335317330960197!3d-4.418559475633156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa%2C+Democratic+Republic+of+the+Congo!5e0!3m2!1sen!2sus!4v1554211368669!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 10,
        woeid: "2423945",
        country: "United States",
        city: "Honolulu",
        state: "Hawaii",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7610486.310008544!2d-162.28510631298067!3d21.348216482011434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b28f55ff3a7976c!2sHonolulu%2C+HI!5e0!3m2!1sen!2sus!4v1554180072971!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 5,
        woeid: "2251945",
        country: "Iran",
        city: "Tehrān",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13253408.904137006!2d42.37084385366811!3d35.807407207036135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C+Tehran+Province%2C+Iran!5e0!3m2!1sen!2sus!4v1554211398451!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2383489",
        country: "United States",
        city: "Colorado Springs",
        state: "Colorado",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6358747.513260614!2d-109.24323586010442!3d38.90438108745812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713412ea1e6d22b%3A0x418eeb92f5e86b13!2sColorado+Springs%2C+CO!5e0!3m2!1sen!2sus!4v1554180116250!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 13,
        woeid: "2348079",
        country: "New Zealand",
        city: "Auckland",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13056207.482625594!2d165.88702897730187!3d-36.972787198128984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1554211432617!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2161842",
        country: "China",
        city: "Dongguan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15036395.812639017!2d104.81045694182887!3d23.06064227060163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34030a94dd8813e5%3A0x768320300ebc7a43!2sDongguan%2C+Guangdong%2C+China!5e0!3m2!1sen!2sus!4v1554209801176!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2486340",
        country: "United States",
        city: "Sacramento",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6386793.785405808!2d-125.92781381592987!3d38.59017128049055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C+CA!5e0!3m2!1sen!2sus!4v1554181718795!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2430683",
        country: "United States",
        city: "Kansas City",
        state: "Kansas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6336512.041816369!2d-99.23328269337148!3d39.15198116883387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c08ce427cf3515%3A0xdc77777b70c31e05!2sKansas+City%2C+KS!5e0!3m2!1sen!2sus!4v1554180302915!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2407517",
        country: "United States",
        city: "Fresno",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6541721.517553172!2d-124.27960117397745!3d36.81372804873476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C+CA!5e0!3m2!1sen!2sus!4v1554181749808!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 7,
        woeid: "1225448",
        country: "Thailand",
        city: "Bangkok",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871969.058130153!2d91.64681770406071!3d13.77932880922579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C+Thailand!5e0!3m2!1sen!2sus!4v1554211846994!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 7,
        woeid: "1252431",
        country: "Vietnam",
        city: "Ho Chi Minh City",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16052902.477146039!2d97.70839913200874!3d10.798622345195433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo+Chi+Minh+City%2C+Vietnam!5e0!3m2!1sen!2sus!4v1554211871696!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2449808",
        country: "United States",
        city: "Mesa",
        state: "Arizona",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6819893.217235919!2d-116.22305034728248!3d33.42256689049386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba7c2c0c592c1%3A0xd10fc215694e771b!2sMesa%2C+AZ!5e0!3m2!1sen!2sus!4v1554180363521!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2357024",
        country: "United States",
        city: "Atlanta",
        state: "Georgia",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6790499.839075177!2d-88.90586893732305!3d33.794922205010906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C+GA!5e0!3m2!1sen!2sus!4v1554180404576!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295420",
        country: "India",
        city: "Bangalore",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923062.00285762!2d68.64449556802445!3d13.005950052320705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C+Karnataka%2C+India!5e0!3m2!1sen!2sus!4v1554211902552!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "418440",
        country: "Peru",
        city: "Lima",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15980791.40768745!2d-85.97427517978228!3d-12.073738184600051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C+Peru!5e0!3m2!1sen!2sus!4v1554211942119!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2352824",
        country: "United States",
        city: "Albuquerque",
        state: "New Mexico",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6684454.470041861!2d-111.16105343362547!3d35.10936304887063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd309837b%3A0xc0d3f8ceb8d9f6fd!2sAlbuquerque%2C+NM!5e0!3m2!1sen!2sus!4v1554180437950!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2508428",
        country: "United States",
        city: "Tucson",
        state: "Arizona",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6915701.374784544!2d-115.36918473523583!3d32.18247037962923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d665410b2ced2b%3A0x73c32d384d16c715!2sTucson%2C+AZ!5e0!3m2!1sen!2sus!4v1554180467141!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "1398823",
        country: "Nigeria",
        city: "Lagos",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234799.65170837!2d-5.703292244907966!3d6.575306089178491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C+Nigeria!5e0!3m2!1sen!2sus!4v1554211995340!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2441472",
        country: "United States",
        city: "Long Beach",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787917.709013364!2d-122.64169209148407!3d33.8274597931362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cae84099d759%3A0xa1003afac42a8faa!2sLong+Beach%2C+CA!5e0!3m2!1sen!2sus!4v1554181803423!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2161853",
        country: "China",
        city: "Shenzhen",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083159.806043591!2d105.06987552703536!3d22.63842022624199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f408d0e15291%3A0xfdee550db79280c9!2sShenzhen%2C+Guangdong%2C+China!5e0!3m2!1sen!2sus!4v1554209824551!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "368148",
        country: "Colombia",
        city: "Bogotá",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288096.752375243!2d-83.09518912534848!3d4.667638199876973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C+Bogota%2C+Colombia!5e0!3m2!1sen!2sus!4v1554212032203!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2465512",
        country: "United States",
        city: "Omaha",
        state: "Nebraska",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6136797.134041439!2d-100.56532664614505!3d41.320109935403956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C+NE!5e0!3m2!1sen!2sus!4v1554180551578!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2478307",
        country: "United States",
        city: "Raleigh",
        state: "North Carolina",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6621336.857963795!2d-83.13016737255354!3d35.871687740836514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C+NC!5e0!3m2!1sen!2sus!4v1554180577570!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2450022",
        country: "United States",
        city: "Miami",
        state: "Florida",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7356291.966331194!2d-84.71556746017285!3d25.805572036743317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL!5e0!3m2!1sen!2sus!4v1554180612296!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "19792",
        country: "United Kingdom",
        city: "Exeter",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5169577.4239636455!2d-7.998191175369461!3d50.75318183081514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c52c4d4498da7%3A0xa976e3256bdfad1e!2sExeter%2C+UK!5e0!3m2!1sen!2sus!4v1554207611867!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 7,
        woeid: "1236594",
        country: "Vietnam",
        city: "Hà Nội",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15246435.730942544!2d96.85263878093546!3d21.101625758558257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1554212087584!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "1532755",
        country: "Morocco",
        city: "Casablanca",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13599108.907003064!2d-16.56678764789582!3d33.6806055615398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C+Morocco!5e0!3m2!1sen!2sus!4v1554212147567!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "1062617",
        country: "Singapore",
        city: "Singapore",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337954.51847538!2d94.85657122643897!3d1.3206924430901286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sus!4v1554212169886!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1118550",
        country: "Japan",
        city: "Yokohama",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293950.311381245!2d130.61782184929984!3d35.56374432710331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185becbbb66509%3A0x69683f660285400!2sYokohama%2C+Kanagawa%2C+Japan!5e0!3m2!1sen!2sus!4v1554212191823!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "1528488",
        country: "Kenya",
        city: "Nairobi",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16338038.522567986!2d27.859836589179803!3d-1.3078518398677104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C+Kenya!5e0!3m2!1sen!2sus!4v1554212288771!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2159908",
        country: "China",
        city: "Tianjin",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12658092.755080692!2d108.31774581532615!3d39.23481966053296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35edfc621e2c0e87%3A0x847194b730884031!2sTianjin%2C+China!5e0!3m2!1sen!2sus!4v1554209860029!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "1915035",
        country: "Bangladesh",
        city: "Dhaka",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944748.847028697!2d81.43585348829295!3d23.867612379978542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C+Bangladesh!5e0!3m2!1sen!2sus!4v1554212329927!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1079132",
        country: "North Korea",
        city: "Pyongyang",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12674467.330688491!2d116.76473728544804!3d39.143966289225745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357e02dae64f4337%3A0xd40677e21771aa95!2sPyongyang%2C+North+Korea!5e0!3m2!1sen!2sus!4v1554212364358!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "1313090",
        country: "Ethiopia",
        city: "Addis Ababa",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16141097.670023741!2d29.791172178956735!3d8.99994150103224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis+Ababa%2C+Ethiopia!5e0!3m2!1sen!2sus!4v1554212986429!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295414",
        country: "India",
        city: "Hyderabad",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15587657.307825658!2d69.4225861544367!3d17.479786246921652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C+Telangana%2C+India!5e0!3m2!1sen!2sus!4v1554213013197!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2488853",
        country: "United States",
        city: "Santa Cruz",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6525409.119381114!2d-126.53282592994414!3d37.004191575553016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e441b7c36d549%3A0x52ca104b2ad7f985!2sSanta+Cruz%2C+CA!5e0!3m2!1sen!2sus!4v1554181841166!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "560743",
        country: "Ireland",
        city: "Dublin",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4877299.319741228!2d-10.730128663060537!3d53.35231689605715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C+Ireland!5e0!3m2!1sen!2sus!4v1554213034845!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "804365",
        country: "Hungary",
        city: "Budapest",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5519256.675325804!2d14.645338307832976!3d47.51037374285849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapest%2C+Hungary!5e0!3m2!1sen!2sus!4v1554213110446!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "718345",
        country: "Italy",
        city: "Milan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728034.658690819!2d4.692607564921664!3d45.49212108900806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilan%2C+Metropolitan+City+of+Milan%2C+Italy!5e0!3m2!1sen!2sus!4v1554213142624!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "14979",
        country: "United Kingdom",
        city: "Cambridge",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5005080.028785151!2d-4.364524607553668!3d52.2272756229558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d85d89f32a012d%3A0x63a320e1a35e3d21!2sCambridge%2C+UK!5e0!3m2!1sen!2sus!4v1554207633889!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "31278",
        country: "United Kingdom",
        city: "Oxford",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5055463.865985987!2d-5.7321413176474945!3d51.77896266376848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2sOxford%2C+UK!5e0!3m2!1sen!2sus!4v1554207658657!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "551801",
        country: "Austria",
        city: "Vienna",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5441042.758810971!2d11.89516236434252!3d48.249763447124394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C+Austria!5e0!3m2!1sen!2sus!4v1554213193110!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "968019",
        country: "Belgium",
        city: "Brussels",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5155146.2277622605!2d-0.10924648753447705!3d50.88372596038394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBrussels%2C+Belgium!5e0!3m2!1sen!2sus!4v1554213223072!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "667931",
        country: "Germany",
        city: "Cologne",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5143786.822197693!2d2.4826765340248307!3d50.98631286977334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259169ab2fe5%3A0x42760fc4a2a77f0!2sCologne%2C+Germany!5e0!3m2!1sen!2sus!4v1554213256173!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "1939753",
        country: "Saudi Arabia",
        city: "Riyadh",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14833800.959649421!2d37.83878527493335!3d24.811424841125056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh+Saudi+Arabia!5e0!3m2!1sen!2sus!4v1554213288114!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "1947122",
        country: "Syria",
        city: "Damascus",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6811078.435598329!2d31.79679458987283!3d33.534615626393276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C+Syria!5e0!3m2!1sen!2sus!4v1554213315001!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "2343732",
        country: "Turkey",
        city: "Ankara",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12515616.3267993!2d23.785705228868657!3d40.01804278003816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C+Turkey!5e0!3m2!1sen!2sus!4v1554213529066!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2440351",
        country: "United States",
        city: "Little Rock",
        state: "Arkansas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6713671.917594397!2d-96.82312253355673!3d34.75155922210555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a134a11f569b%3A0x3405f5100df35b17!2sLittle+Rock%2C+AR!5e0!3m2!1sen!2sus!4v1554180687854!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2521358",
        country: "United States",
        city: "Wilmington",
        state: "Delaware",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6281514.842573331!2d-80.01461415281138!3d39.758832074762054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c70f185c46af6f%3A0x8516da5077308c00!2sWilmington%2C+DE!5e0!3m2!1sen!2sus!4v1554180741044!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -3,
        woeid: "349859",
        country: "Chile",
        city: "Santiago",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617970.27939869!2d-79.65900797035907!3d-33.56117590876767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0069af23abb%3A0x879d59f409ed4897!2sSantiago%2C+Santiago+Metropolitan+Region%2C+Chile!5e0!3m2!1sen!2sus!4v1554213566264!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2364559",
        country: "United States",
        city: "Birmingham",
        state: "Alabama",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809261.416296754!2d-91.33482642291096!3d33.55767150280028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888911df5885bfd3%3A0x25507409eaba54ce!2sBirmingham%2C+AL!5e0!3m2!1sen!2sus!4v1554180841624!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "1979455",
        country: "Iraq",
        city: "Baghdad",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13640253.696978932!2d35.375999789943876!3d33.41959258107874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C+Iraq!5e0!3m2!1sen!2sus!4v1554213620734!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2366355",
        country: "United States",
        city: "Boise",
        state: "Idaho",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5914356.310154506!2d-120.7183859612801!3d43.630079345468204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef172e947b49d%3A0x9a5b989b36679d9b!2sBoise%2C+ID!5e0!3m2!1sen!2sus!4v1554180866752!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -8,
        woeid: "2354490",
        country: "United States",
        city: "Anchorage",
        state: "Alaska",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15605880.986314328!2d-167.34300275115737!3d61.47976816828223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8917604b33f41%3A0x257dba5aa78468e3!2sAnchorage%2C+AK!5e0!3m2!1sen!2sus!4v1554180917502!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "946738",
        country: "Greece",
        city: "Athens",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6437253.117943753!2d19.252589144636413!3d38.01934982119764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C+Greece!5e0!3m2!1sen!2sus!4v1554213650142!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "56558361",
        country: "Greece",
        city: "Santorini",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6572814.711200713!2d20.946298258188296!3d36.4483191840148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cdce05e3bce9%3A0x9f4c192bbefa1db!2sThera+847+00%2C+Greece!5e0!3m2!1sen!2sus!4v1554213799543!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "980389",
        country: "Iceland",
        city: "Reykjavík",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561937.178049351!2d-26.33583646726154!3d64.15638143677214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674b9eedcedc3%3A0xec912ca230d26071!2sReykjav%C3%ADk%2C+Iceland!5e0!3m2!1sen!2sus!4v1554213833430!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "839722",
        country: "Bulgaria",
        city: "Sofia",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6002710.697498653!2d18.83855911087017!3d42.72465615493037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C+Bulgaria!5e0!3m2!1sen!2sus!4v1554213853917!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "796597",
        country: "Czech Republic",
        city: "Prague",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5242741.388228637!2d9.980820524601429!3d50.0875540329504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C+Czechia!5e0!3m2!1sen!2sus!4v1554213891876!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "851128",
        country: "Croatia",
        city: "Zagreb",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5689532.407926327!2d11.479219486966851!3d45.86946900825556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb%2C+Croatia!5e0!3m2!1sen!2sus!4v1554213925482!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "862592",
        country: "Norway",
        city: "Oslo",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4095551.9310381245!2d6.301316711956428!3d59.919178260460605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C+Norway!5e0!3m2!1sen!2sus!4v1554213953306!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "554890",
        country: "Denmark",
        city: "Copenhagen",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4604834.991576613!2d8.109621201736017!3d55.69846968520216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen%2C+Denmark!5e0!3m2!1sen!2sus!4v1554213974624!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "868274",
        country: "Romania",
        city: "Bucharest",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5831360.619702841!2d21.609401430373154!3d44.4671199902979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C+Romania!5e0!3m2!1sen!2sus!4v1554213995944!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "725003",
        country: "Italy",
        city: "Torino",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5767828.2607102785!2d3.1849298786493505!3d45.099532321404645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d126418be25%3A0x8903f803d69c77bf!2sTurin%2C+Metropolitan+City+of+Turin%2C+Italy!5e0!3m2!1sen!2sus!4v1554214025111!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "906057",
        country: "Sweden",
        city: "Stockholm",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4165374.022780804!2d13.49819838796728!3d59.35175046961615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C+Sweden!5e0!3m2!1sen!2sus!4v1554214051494!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "719258",
        country: "Italy",
        city: "Naples",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6184954.141289635!2d9.775001132436918!3d40.8060566530016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328d896b%3A0x309e11f99628150!2sMetropolitan+City+of+Naples%2C+Italy!5e0!3m2!1sen!2sus!4v1554214071685!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "523920",
        country: "Poland",
        city: "Warsaw",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5001250.259469982!2d16.5766671530256!3d52.26124126824088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C+Poland!5e0!3m2!1sen!2sus!4v1554214100548!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2368947",
        country: "United States",
        city: "Bridgeport",
        state: "Connecticut",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146791.618738675!2d-77.68418450067487!3d41.21385722258597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8092a96783719%3A0xdf8bfca7094fcece!2sBridgeport%2C+CT!5e0!3m2!1sen!2sus!4v1554180981500!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2520077",
        country: "United States",
        city: "Wichita",
        state: "Kansas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6465879.886424973!2d-101.92806739594774!3d37.69225542362007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87badb6ad27f182d%3A0x9396d5bf74d33d3e!2sWichita%2C+KS!5e0!3m2!1sen!2sus!4v1554181012979!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -47,
        woeid: "2480894",
        country: "United States",
        city: "Richmond",
        state: "Virginia",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6477999.032452299!2d-81.97824408536677!3d37.553050165723086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C+VA!5e0!3m2!1sen!2sus!4v1554181040465!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2458833",
        country: "United States",
        city: "New Orleans",
        state: "Louisiana",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7072283.191271459!2d-94.36749929400449!3d30.057986993969255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew+Orleans%2C+LA!5e0!3m2!1sen!2sus!4v1554181068336!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "8775",
        country: "Canada",
        city: "Calgary",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10256237.539783!2d-123.04567960493885!3d51.12756758070918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C+AB%2C+Canada!5e0!3m2!1sen!2sus!4v1554209319010!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "8676",
        country: "Canada",
        city: "Edmonton",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9682289.092432978!2d-122.46418618042976!3d53.66765107243855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C+AB%2C+Canada!5e0!3m2!1sen!2sus!4v1554209340266!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "2123260",
        country: "Russia",
        city: "St Petersburg",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8162112.0911126565!2d21.12655289286339!3d60.036573535361214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2sSt+Petersburg%2C+Russia!5e0!3m2!1sen!2sus!4v1554178502835!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "1199477",
        country: "Philippines",
        city: "Manila",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810697.585415717!2d111.99359865967978!3d14.654034744909039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C+Metro+Manila%2C+Philippines!5e0!3m2!1sen!2sus!4v1554214325468!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "9807",
        country: "Canada",
        city: "Vancouver",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5330061.498001282!2d-127.60850420071067!3d49.28456184681585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C+BC%2C+Canada!5e0!3m2!1sen!2sus!4v1554209359288!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "395270",
        country: "Venezuela",
        city: "Maracaibo",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16059390.752034087!2d-80.66364468705848!3d10.676526620304013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89998e7a5bd625%3A0xce0904e0ea8de74b!2sMaracaibo%2C+Zulia%2C+Venezuela!5e0!3m2!1sen!2sus!4v1554214376977!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "395269",
        country: "Venezuela",
        city: "Caracas",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16068072.709197327!2d-75.87712164343782!3d10.510958048743277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x93dd2eae0a998483!2sCaracas%2C+Capital+District%2C+Venezuela!5e0!3m2!1sen!2sus!4v1554214403545!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2379552",
        country: "United States",
        city: "Cheyenne",
        state: "Wyoming",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150283.310078535!2d-109.25241937067945!3d41.17668353424815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f38762e73ef93%3A0xb10a30418f972d2b!2sCheyenne%2C+WY!5e0!3m2!1sen!2sus!4v1554181105863!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2378319",
        country: "United States",
        city: "Charleston",
        state: "South Carolina",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6864692.404032958!2d-84.45581082449101!3d32.847883734768246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a42dca82477%3A0x35faf7e0aee1ec6b!2sCharleston%2C+SC!5e0!3m2!1sen!2sus!4v1554181132062!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "773964",
        country: "Spain",
        city: "Santander",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928057.494348238!2d-8.296431333030904!3d43.49066616067252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4949ae8a6bee71%3A0xd27cdc801682ba96!2sSantander%2C+Cantabria%2C+Spain!5e0!3m2!1sen!2sus!4v1554209561120!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "2344117",
        country: "Turkey",
        city: "İzmir",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6399573.828257106!2d22.593971968336824!3d38.44627524773056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zSXptaXIsIMSwem1pciwgVHVya2V5!5e0!3m2!1sen!2sus!4v1554214430577!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "628886",
        country: "France",
        city: "Toulouse",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5914357.498201099!2d-3.0524466701279485!3d43.630067272217275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse%2C+France!5e0!3m2!1sen!2sus!4v1554214454535!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "580778",
        country: "France",
        city: "Bordeaux",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5788645.540748222!2d-5.071313139853073!3d44.89308618749166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux%2C+France!5e0!3m2!1sen!2sus!4v1554214474310!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2163866",
        country: "China",
        city: "Wuhan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14056247.776494732!2d105.3192522259612!3d30.67054377136368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342eaef8dd85f26f%3A0x39c2c9ac6c582210!2sWuhan%2C+Hubei%2C+China!5e0!3m2!1sen!2sus!4v1554209888331!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "610264",
        country: "France",
        city: "Marseille",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5945794.929157358!2d0.8951593653952485!3d43.30965004927333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille%2C+France!5e0!3m2!1sen!2sus!4v1554214499638!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "608105",
        country: "France",
        city: "Lille",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5179876.806753471!2d-1.4374966611472124!3d50.65986520059379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3256e11%3A0x40af13e81646360!2sLille%2C+France!5e0!3m2!1sen!2sus!4v1554214523789!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295402",
        country: "India",
        city: "Ahmedabad",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15031416.977677664!2d63.595997394597234!3d23.10516500720868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat%2C+India!5e0!3m2!1sen!2sus!4v1554214557955!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "609125",
        country: "France",
        city: "Lyon",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5697933.968732433!2d0.3500224026437655!3d45.7873345651193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C+France!5e0!3m2!1sen!2sus!4v1554214595113!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "614274",
        country: "France",
        city: "Nice",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5904262.223664877!2d2.7675382616097894!3d43.732562081944586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C+France!5e0!3m2!1sen!2sus!4v1554214615344!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 5,
        woeid: "2211177",
        country: "Pakistan",
        city: "Lahore",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13921010.117234262!2d65.35372759731578!3d31.58770930075973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C+Punjab%2C+Pakistan!5e0!3m2!1sen!2sus!4v1554214637736!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "44544",
        country: "United Kingdom",
        city: "Belfast",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4730765.272549591!2d-10.410919597737196!3d54.6225939548166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860fffdd7d08a3b%3A0x2e57162cefc7c531!2sBelfast%2C+UK!5e0!3m2!1sen!2sus!4v1554207680585!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "641142",
        country: "Germany",
        city: "Bremen",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4900739.522551422!2d4.2517730047668545!3d53.147185348492116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b128100ceee335%3A0xc2e8885cf937df51!2sBremen%2C+Germany!5e0!3m2!1sen!2sus!4v1554214668422!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "36240",
        country: "United Kingdom",
        city: "Stoke-on-Trent",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4911806.077057315!2d-6.644178333769814!3d53.05014756580107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a11520fae440d%3A0xf1cdcd2f02caee04!2sStoke-on-Trent%2C+UK!5e0!3m2!1sen!2sus!4v1554207727667!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2402292",
        country: "United States",
        city: "Fargo",
        state: "North Dakota",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5584847.151867024!2d-101.31304527315355!3d46.88351778935886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c8cb8d84677145%3A0x81aa30a52791aaca!2sFargo%2C+ND!5e0!3m2!1sen!2sus!4v1554181256697!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1118129",
        country: "Japan",
        city: "Sendai",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12802558.239010146!2d131.79130035117606!3d38.42704021876189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2aee30cd55d3%3A0xba2579e0b846b1ee!2sSendai%2C+Miyagi%2C+Japan!5e0!3m2!1sen!2sus!4v1554214697542!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "38283",
        country: "United Kingdom",
        city: "Truro",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5220154.0814179005!2d-9.549929799386776!3d50.29373179841611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486b107cd55a1a75%3A0x616347ef951d07b4!2sTruro%2C+UK!5e0!3m2!1sen!2sus!4v1554207852009!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "32566",
        country: "United Kingdom",
        city: "Preston",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4826131.136492341!2d-7.181512041834583!3d53.79821984487773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0ccb0b7b3c4d%3A0xd68703fb79b28721!2sPreston%2C+UK!5e0!3m2!1sen!2sus!4v1554207878128!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "36615",
        country: "United Kingdom",
        city: "Sunderland",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4695739.436822544!2d-5.890336936496259!3d54.92325304712402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e612d8af0739f%3A0x749d6e7d017f03c3!2sSunderland%2C+UK!5e0!3m2!1sen!2sus!4v1554207904056!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "742676",
        country: "Portugal",
        city: "Lisbon",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6370554.723098416!2d-13.6458986708218!3d38.77236331484441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C+Portugal!5e0!3m2!1sen!2sus!4v1554214729349!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 7,
        woeid: "1226113",
        country: "Thailand",
        city: "Phuket",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16188658.766013907!2d89.3728145907462!3d7.8626680089411085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9ca9a85063dba21!2sPhuket%2C+Thailand!5e0!3m2!1sen!2sus!4v1554214774277!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2467696",
        country: "United States",
        city: "Palm Springs",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6790188.783053648!2d-121.04921170094266!3d33.798843304246404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1ad4ffdbe5b3%3A0xa1e56987c2ed797c!2sPalm+Springs%2C+CA!5e0!3m2!1sen!2sus!4v1554181898827!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "26062",
        country: "United Kingdom",
        city: "Leicester",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4955659.240102962!2d-5.615571237717031!3d52.66439391094931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487742ab49b76c73%3A0x9a151d2a6fb49cb8!2sLeicester%2C+UK!5e0!3m2!1sen!2sus!4v1554207934599!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "698064",
        country: "Germany",
        city: "Stuttgart",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5381367.646387477!2d4.692368579609084!3d48.80821317411638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db34c1ad8fd3%3A0x79d5c11c7791cfe4!2sStuttgart%2C+Germany!5e0!3m2!1sen!2sus!4v1554214799330!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "17044",
        country: "United Kingdom",
        city: "Coventry",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4980831.671060978!2d-5.9994097886381965!3d52.44206853860616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151656e22b7%3A0x4f660f5564f0689!2sCoventry%2C+UK!5e0!3m2!1sen!2sus!4v1554207959798!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "890869",
        country: "Sweden",
        city: "Gothenburg",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4363078.221629627!2d7.409766439249449!3d57.72649120006103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2sGothenburg%2C+Sweden!5e0!3m2!1sen!2sus!4v1554214826969!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "657169",
        country: "Germany",
        city: "Hanover",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4984690.223036927!2d5.276958228476868!3d52.40793085274844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b514d494f85%3A0x425ac6d94ac4720!2sHanover%2C+Germany!5e0!3m2!1sen!2sus!4v1554214850112!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2486982",
        country: "United States",
        city: "St. Louis",
        state: "Missouri",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6378633.445611033!2d-94.72867738506801!3d38.681815594338865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.+Louis%2C+MO!5e0!3m2!1sen!2sus!4v1554181307592!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -3,
        woeid: "455826",
        country: "Brazil",
        city: "Salvador",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928196.386065925!2d-47.48799143893682!3d-12.925720740425223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x1b9fc7912c226698!2sSalvador+-+State+of+Bahia%2C+Brazil!5e0!3m2!1sen!2sus!4v1554214896791!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "32185",
        country: "United Kingdom",
        city: "Plymouth",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5206585.481742992!2d-8.597249431135007!3d50.41729062028888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c8d530e95ea3d%3A0x3b282cb5cef58593!2sPlymouth%2C+UK!5e0!3m2!1sen!2sus!4v1554207983540!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "23511744",
        country: "United States",
        city: "Lake Tahoe",
        state: "Nevada",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339251.96249315!2d-124.52982782886167!3d39.1215422845265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809978a1b91f1151%3A0x8c3f1fafeeafb520!2sLake+Tahoe!5e0!3m2!1sen!2sus!4v1554181330144!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "680564",
        country: "Germany",
        city: "Nuremberg",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5310531.034392557!2d6.648250901270764!3d49.46499620145454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57aeb5b61cd3%3A0xdd5daf85a98c21b7!2sNuremberg%2C+Germany!5e0!3m2!1sen!2sus!4v1554214932332!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2455920",
        country: "United States",
        city: "Mountain View",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6487666.7156883525!2d-126.56674531212433!3d37.44168716955012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain+View%2C+CA!5e0!3m2!1sen!2sus!4v1554181932290!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1117502",
        country: "Japan",
        city: "Kawasaki",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13277142.157328477!2d130.66321512761309!3d35.664940268721004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f7b01bd5057%3A0x88c9f317cacfd3cb!2sKawasaki%2C+Kanagawa%2C+Japan!5e0!3m2!1sen!2sus!4v1554214956972!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "15015372",
        country: "Japan",
        city: "Kyoto",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13352586.10521569!2d126.73973434897847!3d35.208742639315396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C+Japan!5e0!3m2!1sen!2sus!4v1554215007162!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1117545",
        country: "Japan",
        city: "Kobe",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13409523.4942657!2d126.12884893591635!3d34.86101504790724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60007d812aed89d9%3A0xc7126106c2f670f4!2sKobe%2C+Hyogo%2C+Japan!5e0!3m2!1sen!2sus!4v1554215027210!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2132574",
        country: "China",
        city: "Hangzhou",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14100758.79271918!2d111.19063618319774!3d30.363223268607197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344bb629439aaa99%3A0xa7bfd183824de83a!2sHangzhou%2C+Zhejiang%2C+China!5e0!3m2!1sen!2sus!4v1554209907108!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "12903",
        country: "United Kingdom",
        city: "Blackpool",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4819783.860068673!2d-7.5085574748845945!3d53.85335540876048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b4117e942d017%3A0xb52db2179232c2c9!2sBlackpool%2C+UK!5e0!3m2!1sen!2sus!4v1554208009634!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "1015662",
        country: "Myanmar (Burma)",
        city: "Yangon",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15630233.60900241!2d87.1665111957314!3d16.97577988686625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon%2C+Myanmar+(Burma)!5e0!3m2!1sen!2sus!4v1554215056265!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2358492",
        country: "United States",
        city: "Bakersfield",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6664822.671434393!2d-123.50324284966416!3d35.348003247944725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6bc8b994cb0d%3A0x59360c0998fe74c8!2sBakersfield%2C+CA!5e0!3m2!1sen!2sus!4v1554181959345!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2487610",
        country: "United States",
        city: "Salt Lake City",
        state: "Utah",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6184993.80367179!2d-116.40603568156395!3d40.80563107985343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt+Lake+City%2C+UT!5e0!3m2!1sen!2sus!4v1554215083632!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "782538",
        country: "Switzerland",
        city: "Geneva",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5652066.778612663!2d1.6590349537714761!3d46.23435701362995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C+Switzerland!5e0!3m2!1sen!2sus!4v1554215116222!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2475688",
        country: "United States",
        city: "Portland",
        state: "Maine",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5907837.389055136!2d-74.69599720702428!3d43.69628626628062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29c72aab0ee2d%3A0x7e9db6b53372fa29!2sPortland%2C+ME!5e0!3m2!1sen!2sus!4v1554182034342!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "32997",
        country: "United Kingdom",
        city: "Reading",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5088885.393763362!2d-5.480624218671968!3d51.48005093600152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742078d93d3db7%3A0x2ae19f7fcefa7994!2sReading%2C+UK!5e0!3m2!1sen!2sus!4v1554208141703!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "1580913",
        country: "South Africa",
        city: "Durban",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14160056.590573665!2d22.01117586146355!3d-29.94938232305031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban%2C+South+Africa!5e0!3m2!1sen!2sus!4v1554215191450!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1116753",
        country: "Japan",
        city: "Saitama",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13216628.110000933!2d130.67016687850804!3d36.027231733709456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1205c87e7af%3A0x8c74f2c0bfa2f65e!2sSaitama%2C+Japan!5e0!3m2!1sen!2sus!4v1554215227930!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "13911",
        country: "United Kingdom",
        city: "Brighton",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5157090.966580863!2d-4.59082295034649!3d50.86614803530266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509f6294167%3A0x9cc6af7a727d0ef9!2sBrighton%2C+UK!5e0!3m2!1sen!2sus!4v1554208171525!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "645686",
        country: "Germany",
        city: "Dresden",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5130577.734874973!2d9.287950947984283!3d51.1054174772365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf29101ad6a9%3A0x421b1cb4288feb0!2sDresden%2C+Germany!5e0!3m2!1sen!2sus!4v1554215255449!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "575627",
        country: "France",
        city: "Ajaccio",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6076935.610756533!2d4.220387209421047!3d41.95188514022448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12da69b3d29d2383%3A0x40819a5fd955f00!2sAjaccio%2C+France!5e0!3m2!1sen!2sus!4v1554215280128!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295412",
        country: "India",
        city: "Pune",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15489088.98687857!2d64.87790874962015!3d18.59585292690793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C+Maharashtra%2C+India!5e0!3m2!1sen!2sus!4v1554215300464!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "1528335",
        country: "Kenya",
        city: "Mombasa",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301521.54853414!2d30.68382628935078!3d-4.0482250445998815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa%2C+Kenya!5e0!3m2!1sen!2sus!4v1554215331822!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2477058",
        country: "United States",
        city: "Providence",
        state: "Rhode Island",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6086998.864922472!2d-75.90614023203865!3d41.84622322771056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e444e0437e735d%3A0x69df7c4d48b3b627!2sProvidence%2C+RI!5e0!3m2!1sen!2sus!4v1554182064701!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295424",
        country: "India",
        city: "Chennai",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917019.523752673!2d71.2227025495473!3d13.099750561571206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C+Tamil+Nadu%2C+India!5e0!3m2!1sen!2sus!4v1554215356543!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "922137",
        country: "Ukraine",
        city: "Kharkiv",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249756.240102342!2d31.801089732535743!3d50.023395912567295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2sKharkiv%2C+Kharkiv+Oblast%2C+Ukraine!5e0!3m2!1sen!2sus!4v1554209477701!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "565346",
        country: "Finland",
        city: "Helsinki",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068842.724600203!2d20.534901270618487!3d60.13537585886784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki%2C+Finland!5e0!3m2!1sen!2sus!4v1554215378276!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2306179",
        country: "Taiwan",
        city: "Taipei",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14798156.807630546!2d112.52329266420405!3d25.10757299656705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac72bce20a99%3A0x3f6a35cedd0ac2e0!2sTaipei%2C+Taiwan!5e0!3m2!1sen!2sus!4v1554215408483!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 7,
        woeid: "648820",
        country: "Germany",
        city: "Essen",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5090072.881969242!2d2.531417320341083!3d51.46940762067382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2b796abf639%3A0x6a00e111a4ad2c9d!2sEssen%2C+Germany!5e0!3m2!1sen!2sus!4v1554215430250!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "35662",
        country: "United Kingdom",
        city: "St Ives",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5226107.7340830285!2d-9.97252195399571!3d50.23944658915178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ac1883d3d7aed%3A0x90fba57b84271131!2sSt.+Ives%2C+UK!5e0!3m2!1sen!2sus!4v1554208206627!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "10243",
        country: "United Kingdom",
        city: "Aberdeen",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4429178.335566213!2d-6.609073319338808!3d57.17663597540188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4884054c1fd77549%3A0xe8bb05da5cf4c472!2sAberdeen%2C+UK!5e0!3m2!1sen!2sus!4v1554208246842!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -7,
        woeid: "2463583",
        country: "United States",
        city: "Oakland",
        state: "California",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6457616.421894749!2d-126.72029241275939!3d37.78692231850902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d8b28aaed03%3A0x71b415d535759367!2sOakland%2C+CA!5e0!3m2!1sen!2sus!4v1554181983344!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1118108",
        country: "Japan",
        city: "Sapporo",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11932249.50387453!2d132.27238154442347!3d43.1014286574611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ad4755a973633%3A0x33937e9d4687bad5!2sSapporo%2C+Hokkaido%2C+Japan!5e0!3m2!1sen!2sus!4v1554215456194!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "24522",
        country: "United Kingdom",
        city: "Ipswich",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5021018.141670121!2d-3.3205255900984953!3d52.08575486674382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d907861ed5d887%3A0x33ddc3ac7d2d42a9!2sIpswich%2C+UK!5e0!3m2!1sen!2sus!4v1554208273713!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "30704",
        country: "United Kingdom",
        city: "Norwich",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4955198.320027925!2d-3.1976211095885074!3d52.66845865740476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0aad55133f513%3A0x684ca5e00e12452f!2sNorwich%2C+UK!5e0!3m2!1sen!2sus!4v1554208295601!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 13,
        woeid: "2348327",
        country: "New Zealand",
        city: "Christchurch",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11828883.896001654!2d163.62383201649064!3d-43.629209063669414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef8684799945!2sChristchurch%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1554215572369!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 6,
        woeid: "2295405",
        country: "India",
        city: "Surat",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15232316.96006302!2d63.8379775539321!3d21.23869254497762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C+Gujarat%2C+India!5e0!3m2!1sen!2sus!4v1554215594501!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1132447",
        country: "South Korea",
        city: "Busan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13341660.092037562!2d120.09271331329037!3d35.275128063769984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb6de823cd35%3A0x35d8cb74247108a7!2sBusan%2C+South+Korea!5e0!3m2!1sen!2sus!4v1554215621829!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2444674",
        country: "United States",
        city: "Manchester",
        state: "New Hampshire",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5976012.811380833!2d-75.92892472783633!3d42.99986085454899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24ed668666ca3%3A0x6b0432461f357179!2sManchester%2C+NH!5e0!3m2!1sen!2sus!4v1554182089213!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1117227",
        country: "Japan",
        city: "Hiroshima",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13457661.472115448!2d123.45778669025874!3d34.564646640586396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9908eef34fbb%3A0x7e4ce50cfc1f772!2sHiroshima%2C+Japan!5e0!3m2!1sen!2sus!4v1554215642682!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "30599",
        country: "United Kingdom",
        city: "Northampton",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000464.6010292!2d-5.364906092200313!3d52.26820722758973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487704236e4aa273%3A0xcdf495d0d9e86209!2sNorthampton%2C+UK!5e0!3m2!1sen!2sus!4v1554208318136!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "671072",
        country: "Germany",
        city: "Leipzig",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5101121.337357903!2d7.909024790422547!3d51.37030601026245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f818200f2c73%3A0x93df80d2b9b4f552!2sLeipzig%2C+Germany!5e0!3m2!1sen!2sus!4v1554215664298!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "35375",
        country: "United Kingdom",
        city: "Southend-on-Sea",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5078929.281731809!2d-3.7486369972207405!3d51.569224582383875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c4058575353d%3A0xacaa602a86fa432b!2sSouthend-on-Sea%2C+UK!5e0!3m2!1sen!2sus!4v1554208341431!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "726874",
        country: "Netherlands",
        city: "The Hague",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5019401.676718943!2d-0.17465524993443207!3d52.10012048256325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72f4298bd71%3A0x400de5a8d1e6c10!2sThe+Hague%2C+Netherlands!5e0!3m2!1sen!2sus!4v1554215700217!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 3,
        woeid: "834463",
        country: "Belarus",
        city: "Minsk",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4813164.575484164!2d23.235289497681034!3d53.910812517505214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2sMinsk%2C+Belarus!5e0!3m2!1sen!2sus!4v1554215723079!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "33887",
        country: "United Kingdom",
        city: "Salford",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4858126.985364905!2d-6.772496949933697!3d53.51969372659966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0dfe455711%3A0x6df4febf58f5d816!2sSalford%2C+UK!5e0!3m2!1sen!2sus!4v1554208619492!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "25462",
        country: "United Kingdom",
        city: "Kirkwall",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4207545.087465692!2d-7.440710056537899!3d59.00742101829114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x489afe1e29bc041b%3A0xf22367934f69e8e8!2sKirkwall%2C+UK!5e0!3m2!1sen!2sus!4v1554208660275!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "36758",
        country: "United Kingdom",
        city: "Swansea",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5069448.751894962!2d-8.43255599031336!3d51.65403635293193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e45555a4e97b1%3A0x3d77128e2fe7cb74!2sSwansea%2C+UK!5e0!3m2!1sen!2sus!4v1554208696833!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "31889",
        country: "United Kingdom",
        city: "Penzance",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5236081.601828489!2d-10.027830030346738!3d50.148409147894135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ab7f0bf270ec9%3A0xca2d222d47086b56!2sPenzance%2C+UK!5e0!3m2!1sen!2sus!4v1554208723055!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "1393672",
        country: "Nigeria",
        city: "Ibadan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8102560.131723513!2d-0.5832040399270368!3d7.428886914222409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan%2C+Nigeria!5e0!3m2!1sen!2sus!4v1554215756950!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2364254",
        country: "United States",
        city: "Billings",
        state: "Montana",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5695494.554113108!2d-113.04798547198169!3d45.81119429929741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53486f8888fa9d97%3A0x373556d4f179b550!2sBillings%2C+MT!5e0!3m2!1sen!2sus!4v1554182124979!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "1522006",
        country: "Egypt",
        city: "Alexandria",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6985592.192301077!2d25.468595891920614!3d31.250258995247354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C+Alexandria+Governorate%2C+Egypt!5e0!3m2!1sen!2sus!4v1554215820034!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "30079",
        country: "United Kingdom",
        city: "Newcastle",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4912779.779478419!2d-6.713632228037883!3d53.041603681126205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a42a1142a9efd%3A0xd6b6527b7857967c!2sNewcastle-under-Lyme%2C+UK!5e0!3m2!1sen!2sus!4v1554208750064!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2428184",
        country: "United States",
        city: "Jackson",
        state: "Mississippi",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6903941.879734044!2d-94.67425631224312!3d32.33695458108291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86282b7f90741b21%3A0x713cde441f038a0!2sJackson%2C+MS!5e0!3m2!1sen!2sus!4v1554182147970!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2494126",
        country: "United States",
        city: "Sioux Falls",
        state: "South Dakota",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5920226.14533555!2d-101.23057492967715!3d43.570395879703206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878eb498e0bdacd7%3A0xde95ff3aa8b2fccf!2sSioux+Falls%2C+SD!5e0!3m2!1sen!2sus!4v1554182174545!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1117817",
        country: "Japan",
        city: "Nagoya",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13344560.124320798!2d127.94719227721122!3d35.257518349874225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003709e107b2365%3A0x2a9622d4e8ceb352!2sNagoya%2C+Aichi%2C+Japan!5e0!3m2!1sen!2sus!4v1554215844419!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "36796",
        country: "United Kingdom",
        city: "Swindon",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5075786.240330907!2d-6.276875437492825!3d51.59735290740635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871444f3ddbe4e5%3A0xa556bf37e9c5949a!2sSwindon%2C+UK!5e0!3m2!1sen!2sus!4v1554208771126!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -3,
        woeid: "455819",
        country: "Brazil",
        city: "Brasília",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726230.664032647!2d-56.92310497560771!3d-15.782226648404565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2sBras%C3%ADlia+-+Brasilia%2C+Federal+District%2C+Brazil!5e0!3m2!1sen!2sus!4v1554215871802!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "18637",
        country: "United Kingdom",
        city: "Dundee",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4509781.666748741!2d-7.450959582534879!3d56.50148903734389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48864144ab639cd3%3A0x94e43b1e384be52a!2sDundee%2C+UK!5e0!3m2!1sen!2sus!4v1554208811725!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "1396803",
        country: "Nigeria",
        city: "Kano",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15982430.831559012!2d-0.4456032289107303!3d12.046228325323924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80eff0fff3f1%3A0x85ff8700a3da54eb!2sKano%2C+Nigeria!5e0!3m2!1sen!2sus!4v1554215893609!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1110809",
        country: "Japan",
        city: "Kitakyushu",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13551500.327159042!2d121.87714012427034!3d33.980414373831614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543c76849636da9%3A0x388ab930297e38e7!2sKitakyushu%2C+Fukuoka%2C+Japan!5e0!3m2!1sen!2sus!4v1554215916840!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "1047372",
        country: "Indonesia",
        city: "Bali",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16163428.342884593!2d106.08393658120833!3d-8.48484129941883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C+Indonesia!5e0!3m2!1sen!2sus!4v1554215935878!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2367231",
        country: "United States",
        city: "Boulder",
        state: "Colorado",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6254115.53487472!2d-109.72508308774528!3d40.05829252605122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8d4e278dafd3%3A0xc8393b7ca01b8058!2sBoulder%2C+CO!5e0!3m2!1sen!2sus!4v1554182198920!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2452078",
        country: "United States",
        city: "Minneapolis",
        state: "Minnesota",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5777865.107301629!2d-97.74617283546304!3d45.00008921841503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C+MN!5e0!3m2!1sen!2sus!4v1554182225326!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "650272",
        country: "Germany",
        city: "Frankfurt",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5235908.210751495!2d4.151840522493475!3d50.1499928222538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C+Germany!5e0!3m2!1sen!2sus!4v1554215965840!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "19894",
        country: "United Kingdom",
        city: "Falmouth",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5232687.43196956!2d-9.559158859830616!3d50.17940329625642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486b23280fb96b55%3A0xf3e3f00bb4ab2328!2sFalmouth%2C+UK!5e0!3m2!1sen!2sus!4v1554208866962!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "28869",
        country: "United Kingdom",
        city: "Middlesbrough",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735456.058495053!2d-5.707333590555736!3d54.582243684135946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e935561999019%3A0x6f839f20e3c1fa9c!2sMiddlesbrough%2C+UK!5e0!3m2!1sen!2sus!4v1554208838324!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "33267",
        country: "United Kingdom",
        city: "Rhyl",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4878099.6021551145!2d-7.962429210851183!3d53.3453224327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48652618418b2481%3A0xfce1c44350b2b6e1!2sRhyl%2C+UK!5e0!3m2!1sen!2sus!4v1554208900857!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "13383",
        country: "United Kingdom",
        city: "Bournemouth",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5166308.211970895!2d-6.344384563989619!3d50.782776270398884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487398a0b1a067fd%3A0x3b2ee0156ba92c94!2sBournemouth%2C+UK!5e0!3m2!1sen!2sus!4v1554208933664!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 9,
        woeid: "1117099",
        country: "Japan",
        city: "Fukuoka",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13586716.57646805!2d121.28357766513086!3d33.758870474873504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541eda1e9848429%3A0xf60a729936398783!2sFukuoka%2C+Japan!5e0!3m2!1sen!2sus!4v1554215996742!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2459269",
        country: "United States",
        city: "Newark",
        state: "New Jersey",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6189209.430683452!2d-78.66710419123015!3d40.760376950101296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C+NJ!5e0!3m2!1sen!2sus!4v1554182252023!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 13,
        woeid: "2349386",
        country: "New Zealand",
        city: "Manukau",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13033984.118868826!2d165.89713625512678!3d-37.10214119040817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dc0da10dc85%3A0x500ef6143a2df40!2sManukau%2C+Auckland%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1554216027988!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "27997",
        country: "United Kingdom",
        city: "Luton",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039689.460173952!2d-4.912476143385825!3d51.91961775822712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876360018f62c49%3A0x33fa5303edefd681!2sLuton%2C+UK!5e0!3m2!1sen!2sus!4v1554208964967!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 13,
        woeid: "2351310",
        country: "New Zealand",
        city: "Wellington",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12266148.716849657!2d165.78552108398546!3d-41.359629999473704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1fc49e974cb%3A0xa00ef63a213b470!2sWellington%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1554216050890!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "1339615",
        country: "Côte d' Ivoire",
        city: "Abidjan",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16270565.49428552!2d-12.966308634243406!3d5.370213334401329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C+C%C3%B4te+d;Ivoire!5e0!3m2!1sen!2sus!4v1554231495041!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "25211",
        country: "United Kingdom",
        city: "Kingston upon Hull",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5092671.848897671!2d-4.7677784616108445!3d51.44610789380971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876093778987453%3A0x4c3f21b23e3e35ec!2sKingston+upon+Thames%2C+UK!5e0!3m2!1sen!2sus!4v1554208997206!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -5,
        woeid: "2391446",
        country: "United States",
        city: "Des Moines",
        state: "Iowa",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6110767.341910265!2d-98.0911742093825!3d41.595790806917314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99a4c1611ee7%3A0x710028512691e4b2!2sDes+Moines%2C+IA!5e0!3m2!1sen!2sus!4v1554182287444!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "1466719",
        country: "Namibia",
        city: "Windhoek",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082254.141628282!2d8.078363975593836!3d-22.64666802154927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b5cb30c01ed%3A0xe4b84940cc445d3b!2sWindhoek%2C+Namibia!5e0!3m2!1sen!2sus!4v1554216104594!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "582723",
        country: "France",
        city: "Calvi",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6016779.687752901!2d4.275755436379037!3d42.57905445288452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d0eb684ff741d3%3A0x40819a5fd9555b0!2sCalvi%2C+France!5e0!3m2!1sen!2sus!4v1554216138120!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "725746",
        country: "Italy",
        city: "Venice",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5733960.176748647!2d7.8965918061365725!3d45.43383031627513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenice%2C+Metropolitan+City+of+Venice%2C+Italy!5e0!3m2!1sen!2sus!4v1554216159295!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "773692",
        country: "Spain",
        city: "Santa Cruz de Tenerife",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7182135.875407403!2d-20.77277940001125!3d28.482489321378363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cceccc254171%3A0x43111473d277e52e!2sSanta+Cruz+de+Tenerife%2C+Spain!5e0!3m2!1sen!2sus!4v1554209604031!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "2158433",
        country: "China",
        city: "Chengdu",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14043050.489739498!2d95.09445013598415!3d30.76112952468654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36efc52300447721%3A0xb98652ce2e240e02!2sChengdu%2C+Sichuan%2C+China!5e0!3m2!1sen!2sus!4v1554209932362!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "41415",
        country: "United Kingdom",
        city: "York",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4804435.323344042!2d-5.564938743218365!3d53.986520548246055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878c340e19865f1%3A0x4774ab898a54e4d1!2sYork%2C+UK!5e0!3m2!1sen!2sus!4v1554209024213!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 8,
        woeid: "1154781",
        country: "Malaysia",
        city: "Kuala Lumpur",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16317577.447191935!2d92.69951915882811!3d3.1517079549136326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala+Lumpur%2C+Federal+Territory+of+Kuala+Lumpur%2C+Malaysia!5e0!3m2!1sen!2sus!4v1554216204005!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "32452",
        country: "United Kingdom",
        city: "Portsmouth",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5160702.000519659!2d-5.58137128151594!3d50.83349731158348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487442a41814f1e9%3A0x45b683ea03373b79!2sPortsmouth%2C+UK!5e0!3m2!1sen!2sus!4v1554209048125!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "34811",
        country: "United Kingdom",
        city: "Sidmouth",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5173550.418316012!2d-7.725311875917408!3d50.71719960422926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d8310b3ca3c0b%3A0x219769f79eac7686!2sSidmouth%2C+UK!5e0!3m2!1sen!2sus!4v1554209071323!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2372071",
        country: "United States",
        city: "Burlington",
        state: "Vermont",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5825877.306046529!2d-77.71138359115787!3d44.52198088721062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca7a55b69b55e5%3A0xc35fe519720e498e!2sBurlington%2C+VT!5e0!3m2!1sen!2sus!4v1554182315252!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -6,
        woeid: "2488867",
        country: "United States",
        city: "Santa Fe",
        state: "New Mexico",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6634788.381055724!2d-110.46848008893859!3d35.71040762624101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87185043e79852a9%3A0x8c902373fd88df40!2sSanta+Fe%2C+NM!5e0!3m2!1sen!2sus!4v1554182341475!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "784794",
        country: "Switzerland",
        city: "Zurich",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5530146.710636596!2d4.051761166051725!3d47.40673405344267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich%2C+Switzerland!5e0!3m2!1sen!2sus!4v1554216225805!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "30720",
        country: "United Kingdom",
        city: "Nottingham",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4919540.957233706!2d-5.654503037148256!3d52.98225033521301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487832d2390779cd%3A0x108063201919db15!2sNottingham%2C+UK!5e0!3m2!1sen!2sus!4v1554209095738!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "18114",
        country: "United Kingdom",
        city: "Derby",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924029.119869667!2d-5.9544125730719095!3d52.94282515729177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e43286a4caa7%3A0x5fc9de954e36df!2sDerby%2C+UK!5e0!3m2!1sen!2sus!4v1554209119249!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "24083",
        country: "United Kingdom",
        city: "Huddersfield",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4839716.506606658!2d-6.272076213385228!3d53.68007986683194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487962132bcdb7bb%3A0x653c3a498c896a17!2sHuddersfield%2C+UK!5e0!3m2!1sen!2sus!4v1554209143874!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "645458",
        country: "Germany",
        city: "Dortmund",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5082598.991303844!2d2.9856678557539134!3d51.536369023155274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91760bff07a11%3A0x427f28131548750!2sDortmund%2C+Germany!5e0!3m2!1sen!2sus!4v1554216245524!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 0,
        woeid: "40859",
        country: "United Kingdom",
        city: "Wolverhampton",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4960265.443087747!2d-6.615871285001829!3d52.62376079032226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487080d43225d7fd%3A0x526da09547380126!2sWolverhampton%2C+UK!5e0!3m2!1sen!2sus!4v1554209166841!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 2,
        woeid: "1591691",
        country: "South Africa",
        city: "Cape Town",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13544962.987768322!2d9.676325007445637!3d-34.02140067776585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape+Town%2C+South+Africa!5e0!3m2!1sen!2sus!4v1554216263612!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: 1,
        woeid: "646099",
        country: "Germany",
        city: "Düsseldorf",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5112622.052030962!2d2.329730477012326!3d51.26700203725414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c97bf1465907%3A0x42760fc4a2a73b0!2sD%C3%BCsseldorf%2C+Germany!5e0!3m2!1sen!2sus!4v1554216285330!5m2!1sen!2sus"
    },

    {
        cityGmtDifferential: -4,
        woeid: "2383552",
        country: "United States",
        city: "Columbia",
        state: "South Carolina",
        googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6769070.865240661!2d-85.42221713349804!3d34.064120772943994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5697931d1e3%3A0xf32808f4b379fa96!2sColumbia%2C+SC!5e0!3m2!1sen!2sus!4v1554182376187!5m2!1sen!2sus"
    }

]

export default CityData;
