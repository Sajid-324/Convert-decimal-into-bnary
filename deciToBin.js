let binArray = [];
let deciToBin = (number) =>{
	if(number<=0){
		binArray.unshift(0);
	}
	else if(number==1){
		binArray.unshift(1);
	}
	else if((number%2)==1){
		binArray.unshift(1);
		bin(Math.floor(number/2));
	}
	else{
		binArray.unshift(0);
		bin(Math.floor(number/2));
		}
	return binArray.join('');
};

let x = deciToBin(245);
console.log(x);
