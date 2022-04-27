function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let price=0;
  if (eventId==1){
    price=91.25
  }else if (eventId==2) {
    price=78.88
  }else if (eventId==3) {
    price=83.12
  }else if (eventId==4) {
    price=100
  }
  return ticknum*price;
}