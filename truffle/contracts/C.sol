contract C {    
     uint[] public numbers;

     function initNumbers() {
         numbers.push(1);
         numbers.push(2);
     }

     function stateChanger(uint a) {
         numbers.push(a);
     }    
}
