const data = [
    {
        entry: 1,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 10,
        },
        _id: "631cc9b7a1a85aa12ca490b2",
        __v: 0,
    },
    {
        entry: 2,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 10,
        },
        _id: "631cc9b7a1a85aa12ca490b3",
        __v: 0,
    },
    {
        entry: 5,
        exit: 3,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 10,
        },
        _id: "631cc9b7a1a85aa12ca490b4",
        __v: 0,
    },
    {
        entry: 9,
        exit: 2,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 10,
        },
        _id: "631cc9b7a1a85aa12ca490b5",
        __v: 0,
    },
    {
        entry: 1,
        exit: 5,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 10,
        },
        _id: "631cc9b7a1a85aa12ca490b6",
        __v: 0,
    },
    {
        entry: 2,
        exit: 0,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 11,
        },
        _id: "631cc9b7a1a85aa12ca490b7",
        __v: 0,
    },
    {
        entry: 1,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 11,
        },
        _id: "631cc9b7a1a85aa12ca490b8",
        __v: 0,
    },
    {
        entry: 6,
        exit: 7,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 11,
        },
        _id: "631cc9b7a1a85aa12ca490b9",
        __v: 0,
    },
    {
        entry: 3,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 11,
        },
        _id: "631cc9b7a1a85aa12ca490ba",
        __v: 0,
    },
    {
        entry: 1,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 12,
        },
        _id: "631cc9b7a1a85aa12ca490bb",
        __v: 0,
    },
    {
        entry: 5,
        exit: 2,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 12,
        },
        _id: "631cc9b7a1a85aa12ca490bc",
        __v: 0,
    },
    {
        entry: 9,
        exit: 5,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 12,
        },
        _id: "631cc9b7a1a85aa12ca490bd",
        __v: 0,
    },
    {
        entry: 6,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 12,
        },
        _id: "631cc9b7a1a85aa12ca490be",
        __v: 0,
    },
    {
        entry: 1,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 13,
        },
        _id: "631cc9b7a1a85aa12ca490bf",
        __v: 0,
    },
    {
        entry: 6,
        exit: 3,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 13,
        },
        _id: "631cc9b7a1a85aa12ca490c0",
        __v: 0,
    },
    {
        entry: 5,
        exit: 3,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 14,
        },
        _id: "631cc9b7a1a85aa12ca490c1",
        __v: 0,
    },
    {
        entry: 1,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 14,
        },
        _id: "631cc9b7a1a85aa12ca490c2",
        __v: 0,
    },
    {
        entry: 7,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 15,
        },
        _id: "631cc9b7a1a85aa12ca490c3",
        __v: 0,
    },
    {
        entry: 1,
        exit: 3,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 16,
        },
        _id: "631cc9b7a1a85aa12ca490c4",
        __v: 0,
    },
    {
        entry: 7,
        exit: 2,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 16,
        },
        _id: "631cc9b7a1a85aa12ca490c5",
        __v: 0,
    },
    {
        entry: 5,
        exit: 1,
        datetime: {
            year: 2022,
            month: 8,
            day: 0,
            hour: 17,
        },
        _id: "631cc9b7a1a85aa12ca490c6",
        __v: 0,
    },
];

// const data = await dataCollection.json()


const result = data.reduce((acc, d) => {
    const found = acc.find((item) => item.datetime.hour === d.datetime.hour);
    if (!found) {
        acc.push({
            datetime: d.datetime,
            worker_count: d.entry-d.exit,
        });
    }else {
        found.worker_count= found.worker_count+d.entry-d.exit
    }
    return acc;
}, []);

console.log(result)
