function main() {
  let cards = document.querySelectorAll(".kartu");
  let papanSkor = document.getElementById('papan-skor');
  let speed = 600;
  let skor = 0;
  
  const randomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min;
  };
  
  const cardRand = function() {
    let i0 = randomInt(1, 100);
    let i1 = randomInt(1, 100);
    let i2 = randomInt(1, 100);
    let i3 = randomInt(1, 100);
    let i4 = randomInt(1, 100);
    
    cards[0].style.marginTop = i0 + "rem";
    cards[1].style.marginTop = i1 + "rem";
    cards[2].style.marginTop = i2 + "rem";
    cards[3].style.marginTop = i3 + "rem";
    cards[4].style.marginTop = i4 + "rem";
    
    cards[0].setAttribute('data-skor', i0);
    cards[1].setAttribute('data-skor', i1);
    cards[2].setAttribute('data-skor', i2);
    cards[3].setAttribute('data-skor', i3);
    cards[4].setAttribute('data-skor', i4);
  };
  
  setInterval(cardRand, speed);
  
  cards.forEach(function(card){
    card.onclick = function(e){
      localStorage.setItem("skor", parseInt(
        e.target.getAttribute("data-skor")
      ));
      
      papanSkor.innerHTML = getSkor();
    }
  });
  
  const getSkor = function() {
    skor = skor + parseInt(localStorage.getItem("skor"));
    
    return skor;
  }
}