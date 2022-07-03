function ab() {
    // e.preventDefault();
    var ele=document.cost.electricity.value
    var car=document.cost.car.value
    var home=document.cost.rent.value
    var school=document.cost.school.value
    var water=document.cost.water.value
    var gas=document.cost.gas.value
    var food=document.cost.food.value
    var other=document.cost.other.value
    var rev=document.cost.revenue.value

    console.log(ele)
    console.log(car)
    
    if (isNaN(ele)||isNaN(car)||isNaN(home)||isNaN(school)||isNaN(water)||isNaN(gas)||isNaN(food)||isNaN(other)||isNaN(rev)){
        alert("ERROR! Please put numbers only because we dont understand letters cause we dont have a brain. hahha!")
    }

    else {
        var sum=parseInt(ele)+parseInt(car)+parseInt(home)+parseInt(school)+parseInt(water)+parseInt(gas)+parseInt(food)+parseInt(other)
        var save=rev-sum
        console.log(sum)
        console.log(save)
        document.getElementById("total_cost").value=sum
        document.getElementById("saving").value=save
    }
}

document.getElementById("addForm").addEventListener("submit",(e)=>{
    e.preventDefault();
})
