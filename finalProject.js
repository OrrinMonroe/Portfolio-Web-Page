/* Orrin Monroe 07/24/2023 */
	 "use strict";
	function math()
	{
		
		let n1 = +document.getElementById('num1').value;  //getElementById.value
		let n2 = +document.getElementById('num2').value;
		let mathOperator = document.getElementById('operators').value;
		
		console.log('n1: ' + n1);  
		console.log('n2: ' + n2);
		console.log('mathOperator: ' + mathOperator);

		let answer = 0;  

		switch (mathOperator) //switch
		{
		case 'add':
			answer = n1 + n2; break;
		case 'sub':
			answer = n1 - n2; break;
		case 'multiplication':
			answer = n1 * n2; break;
		case 'division':
			answer = n1 / n2; break;
		case 'modulus':
			answer = n1 % n2; break;
		case 'exponentiation':
			answer = n1 ** n2; break;
		}
		
	document.getElementById('result').textContent = name + "'s answer is " + answer;  //getElementbyId.textContent
	}
		document.getElementById('calculate').addEventListener('click', math); //addEventListener
	
	
	function show1()
	{
		document.getElementById('happyGoat').style.display = "block";
	}

	function show2()
	{
		document.getElementById('sadPanda').style.display = "block";
	}
	function check1() //array
	{
		const myArray = ["abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export",
		"extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null"
		,"package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void"
		,"volatile","while","with","yield"];
		
		let k = document.getElementById("word").value;
		for (let i = 0; i < myArray.length; i++)
		{
			console.log(myArray[i]);
			if (k == myArray[i])
			{
				document.getElementById('isR').textContent = name + " " + k + " is a reserved word.";
				break;
			}
			else
			{
				document.getElementById('isR').textContent = name + " " + k + " is not a reserved word.";
			}
		}
	}
			document.getElementById('check').addEventListener('click', check1); //addEventListener
			
