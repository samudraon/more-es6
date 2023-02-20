const user = [{ id: 1, name: 'abul', job: 'doctor' }];
// console.log(user[0]);


const data = {
    count: 500,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' }
    ]
}
const firstJob = data.data[0].job
// console.log(firstJob);

const user2 = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A Kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOfiice: 'cantonment',
        city: 'Dhaka'
    }
};

const userFloor = user2.address.stret?.second;
console.log(userFloor);