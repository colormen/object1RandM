"use strict";

window.onload = function() {
<<<<<<< HEAD
  document.querySelector(".load").innerHTML = `<div></div>`;

  let data = fetch("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response);
      if (response.status !== 200) {
        console.log("sry, error..");
      } else {
        return response.json();
      }
    })

    .then(json => renderList(json))
    .catch(err => console.log(err));
  function renderList(data) {
    let rawData = data;
    let list = [...rawData.results];
    let info = rawData.info;

    document.querySelector(".total").innerText = info.count;
    document.querySelector(".current").innerText = list.length;

    const listContainer = document.querySelector("#list");

    list.forEach((el, i, arr) => {
      listContainer.innerHTML += `
        <div class="list-item" data-id = '${i}'>
        <div>${i + 1}. ${el.name}</div>
        <div>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 511.995 511.995;" xml:space="preserve">
            <path d="M381.039,248.62L146.373,3.287c-4.083-4.229-10.833-4.417-15.083-0.333c-4.25,4.073-4.396,10.823-0.333,15.083
              L358.56,255.995L130.956,493.954c-4.063,4.26-3.917,11.01,0.333,15.083c2.063,1.979,4.729,2.958,7.375,2.958
              c2.813,0,5.604-1.104,7.708-3.292L381.039,263.37C384.977,259.245,384.977,252.745,381.039,248.62z"/>
          </svg>
        </div>
      </div>`;
    });
    let modal = document.getElementById("modal");
    let close = document.getElementById("close");
    let htmlList = document.querySelectorAll(".list-item");
    let description = document.querySelector("#description");
    let avatar = document.querySelector("#avatar");
    htmlList.forEach((el,i) => {
      el.addEventListener("click", e => {
        console.log(e);

        el.onclick = function() {
          modal.style.display = "block";
          avatar.innerHTML = `<img src="${list[i].image}" alt="">`
          description.innerHTML = `
          <h2>${list[i].name}</h2>
          <p><b>status</b>: ${list[i].status}</p>
          <p><b>species</b>: ${list[i].species}</p>
          <p><b>gender</b>: ${list[i].gender}</p>
          `;
        };
        close.onclick = function() {
          modal.style.display = "none";
        };
      });
    });
  }
  //   let row = document.querySelector(`.list-item[data-id="${i}"]`)
  //   row.addEventListener('click',(e) =>{
  //      modal.style.display = 'block'
  //   })

  //

  //   document.addEventListener(
  //     'click',
  //     function(event) {
  //       if (event.target.matches('.open')) {
  //         modal.style.display = 'block'
  //       }

  //       if (event.target.matches('.close')) {
  //         modal.style.display = 'none'
  //       }
  //       console.log(event.target)
  //     },
  //     false
  //   );
};
=======

    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => {
            if (response.status !== 200) {
                console.log('sorry, error...')
            } else {
                return response.json()
            }
        })
        .then(json => renderList(json))
        .catch(err => console.log(err))

    function renderList(data) {
        let rawData = data
        let list = [...rawData.results]
        let info = rawData.info

        console.log(rawData)

        document.querySelector('.total').innerText = info.count
        document.querySelector('.current').innerText = list.length

        const listContainer = document.querySelector('#list')

        list.forEach((el, i, arr) => {

            listContainer.innerHTML += `
            <div class="list-item" data-id="${i}">
            <div>${ i + 1 }. ${ el.name } </div>
            <div>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 511.995 511.995;" xml:space="preserve">
                <path d="M381.039,248.62L146.373,3.287c-4.083-4.229-10.833-4.417-15.083-0.333c-4.25,4.073-4.396,10.823-0.333,15.083
                    L358.56,255.995L130.956,493.954c-4.063,4.26-3.917,11.01,0.333,15.083c2.063,1.979,4.729,2.958,7.375,2.958
                    c2.813,0,5.604-1.104,7.708-3.292L381.039,263.37C384.977,259.245,384.977,252.745,381.039,248.62z"/>
                </svg>
            </div>
            </div>
        `
        })

        let htmlList = document.querySelectorAll('.list-item')
        htmlList.forEach(el => {
            console.log(el)
            el.addEventListener('click', e => {
                console.log(e)
            })
        })
    }

};
>>>>>>> 75f2ffecd09da0c87320b2041ed4db6fbfcb9eb3
