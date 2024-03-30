const { Actions } = require('./../utils/actions.js');

function test1() {
    Actions.visitUrl('www.techglobalschool.com')
    .then((data) => {
        console.log(data);
        return Actions.login('TechGlobal', 'Test1234');
    })
    .then((data) => {
        console.log(data);
        return Actions.validateTitle('TechGlobal School');
    })
    .then((data) => console.log(data))
    .catch(err => console.log(err)); 
}

test1();

async function test2() {
    try {
        const data1 = await Actions.visitUrl('www.techglobalschool.com');
        console.log(data1);

        const data2 = await Actions.login('TechGlobal', 'Test1234');
        console.log(data2);

        const data3 = await Actions.validateTitle('TechGlobal School');
        console.log(data3);
    }
    catch(err) {
        console.log(err);
    }
}

test2();
