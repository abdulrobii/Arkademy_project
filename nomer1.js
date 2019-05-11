const biodata = () => {
	const data = {
		name: "Abdul robi padri",
		address: "Cirebon",
		hobbies: [
			"nonton fil marvel", "Membaca", "facebookan", "memancing"
		],
		is_married: false,
		school: {
			highSchool: "Smk Plus assalafiyah ",
			
		},
		skills: [
			{
				skill: "junior Web Programming"
			},
		
			{
				skill: "Public sepaking"
			},
			{
			
			}
		],
	};

	const result = JSON.stringify(data);
	return result;
}


console.log(biodata());