const tops = [
    "https://i.postimg.cc/RhM5X01N/top1.jpg",
    "https://i.postimg.cc/FsPzkY3W/top2.jpg",
    "https://i.postimg.cc/Y9fqr0tx/top3.jpg",
    "https://i.postimg.cc/YqSq7tZ1/top4.jpg",
    "https://i.postimg.cc/PxhTRH1v/top5.jpg",
    "https://i.postimg.cc/05VPcLjr/top6.jpg",
    "https://i.postimg.cc/7L1y7RjH/top7.jpg",
  ];
  
  const bottoms = [
    "https://i.postimg.cc/YCzHLV5p/bottom1.jpg",
    "https://i.postimg.cc/pXNbGRxW/bottom2.jpg",
    "https://i.postimg.cc/C5ktTnYF/bottom3.jpg",
    "https://i.postimg.cc/Jh0272mY/bottom4.jpg",
    "https://i.postimg.cc/3wktQ0CP/bottom5.jpg",
    "https://i.postimg.cc/L6mv6b3k/bottom6.jpg",
    "https://i.postimg.cc/jSFhcd0v/bottom7.jpg",
  ];
  
  function changeTop(count = 0) {
    if (count > 10) return;
    document.getElementById("topImage").src = tops[Math.floor(Math.random() * tops.length)];
    setTimeout(() => changeTop(count + 1), 100);
  }
  
  
  function changeBottom(count = 0) {
    if (count > 10) return;
    document.getElementById("bottomImage").src = bottoms[Math.floor(Math.random() * bottoms.length)];
    setTimeout(() => changeBottom(count + 1), 100);
  }