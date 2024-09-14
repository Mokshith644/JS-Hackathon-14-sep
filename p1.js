var voters=[
    {name:'Bob',age:30,voted:true},
    {name:'jake',age:32,voted:true},
    {name:'Kate',age:25,voted:false},
    {name:'Sam',age:20,voted:false},
    {name:'Phil',age:21,voted:true},
    {name:'Ed',age:55,voted:true},
    {name:'Tamil',age:54,voted:true},
    {name:'Mary',age:31,voted:false},
    {name:'Becky',age:43,voted:false},
    {name:'Joey',age:41,voted:true},
    {name:'Jeff',age:30,voted:true},
    {name:'Zack',age:19,voted:false},
]
function voterResult(arr){
    var county=0;
    var countyvoted=0;
    var countM=0;
    var countMvoted=0;
    var countO=0;
    var countOvoted=0;
    arr.forEach(voter => {
        let age=voter.age;
        let voted=voter.voted;
        if(age>=18 && age<=25){
            county++;
            if(voted)countyvoted++;
        }
        else if(age>=26 && age<=35){
            countM++;
            if(voted)countMvoted++;
        }
        else if(age>=36 && age<=55){
            countO++;
            if(voted)countOvoted++;
        }
        
    });
    console.log(`numYoungVotes: ${countyvoted}`)
        console.log(`numYoungPeople:${county}`)
        console.log(`numMidVotesPeople:${countMvoted}`)
        console.log(`numMidPeople:${countM}`)
        console.log(`numOldVotedPeople:${countO}`)
        console.log(`numOldPeople:${countOvoted}`)
}
voterResult(voters)