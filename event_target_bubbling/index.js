  // window.onload = function() {
    var resultElem = document.getElementById('result')
    document.getElementById('1').addEventListener(
      'click',
      function(event) {
        resultElem.innerHTML += ('<div>target: ' + event.target['id'] + '</div>')
        resultElem.innerHTML += ('<div>currentTarget: ' + event.currentTarget['id'] + '</div>')
      },
      false
    )
    document.getElementById('2').dispatchEvent(
            new Event('click', { bubbles:true }))
  // }