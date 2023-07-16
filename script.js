//your JS code here. If required.
secondHighest(arr){
	let num = arr.sort();
	if(num.length===0 || num.length===1 || num[0]===num[num.length-1]){
		return "-Infinity"
	}
		
	else{
		return num[num.length-2];
	}
}