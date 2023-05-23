
class movie{
    constructor(title='',studio='',rating=''){
    this.title= title;
    this.studio=studio;
    this.rating=rating  ||"PG";
}

getPG(data=[]){
  return data.filter((d)=>d.rating === "PG");
}

}

 const movieUtils=new movie(); 
var movieList =[
new movie("Beast","Sun Pictures","PG13"),
 new movie("casino Royal","Eon production","PG13"),
 new movie("vikram","red geint","PG"),
 new movie("loveToday","AGS production",""),
 new movie("Thunivu","red geint production","R"),
 new movie("leo","seven screen production","R")]
 


 console.log(movieUtils.getPG(movieList)); 


 // 2. second Question this typeScript concept is not roadmap 



 // 3.Write a “person” class to hold all the details.

 class person{
    constructor(StudentName="",WhichClass="",RegNum='',address=""){
        this.StudentName = StudentName;
        this.WhichClass = WhichClass;
        this.RegNum = RegNum;
        this.address = address;
    }
    // member function
   Studentdetails(data){
    console.log(`The ${this.StudentName} next class ${this.WhichClass} the Register Number ${this.RegNum} loction ${this.address}`)
   }
 }

 const sanjay=new person("sanjay","12th Standred",142563,"omalur" )
const Kumar=new person('kumar','9th standrad',25647,'chennai')
const Arun=new person('Arun','11th standrad',75894,'trichy')
sanjay.Studentdetails();
Kumar.Studentdetails();
Arun.Studentdetails();


// output : The sanjay next class 12th Standred the Register Number 142563 loction omalur
//  The kumar next class 9th standrad the Register Number 25647 loction chennai
//  The Arun next class 11th standrad the Register Number 75894 loction trichy


// 4.write a class to calculate the uber price.

class Uber{
    constructor(customer='',UberPrice='',kelometer=''){
        this.customer = customer;
        this.UberPrice = UberPrice;
        this.kelometer = kelometer
    }

   setUberprice(){
   console.log(this.UberPrice*this.kelometer) 
}
      
   
}

const roy=new Uber("roy",25,5)
const ram=new Uber("ram",10,5)
roy.setUberprice();
ram.setUberprice();