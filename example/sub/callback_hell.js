const person =()=>{
    console.log(`this ia a fetched data`)
    const rollno =[1,2,3,4,5,6]
    console.log(rollno);
    setTimeout((rollno)=>{
        const data ={
            name:'jason',
            age:23,
        }
        console.log(`this is roll no ${rollno},my name is ${data.name} and i am ${data.age} years old`);
        setTimeout((name) => {
            data.gender = "male"
            console.log(`this is roll no ${rollno},my name is ${name} and i am a alpha ${data.gender}`);
        }, 2000,data.name);
    },2000,rollno[1])
}