console.log("hello");
// fibbonacci,array,java groom string rev palindrome,armstrong,oops technical,we known speak that last n oops all .all member inherit constructor(plc)pre loading constru n block but access
// plistruction  
// iib instance intializer block   uws user return statement obj class first
let S1 = document.getElementById("S1");
let D1 = document.getElementById("D1");
let P1 = document.getElementById("P1");
let C1 = document.getElementById("C1");

let S2 = document.getElementById("S2");
let D2 = document.getElementById("D2");
let P2 = document.getElementById("P2");
let C2 = document.getElementById("C2");

let S3 = document.getElementById("S3");
let D3 = document.getElementById("D3");
let P3 = document.getElementById("P3");
let C3 = document.getElementById("C3");

let S4 = document.getElementById("S4");
let D4 = document.getElementById("D4");
let P4 = document.getElementById("P4");
let C4 = document.getElementById("C4");

let S5 = document.getElementById("S5");
let D5 = document.getElementById("D5");
let P5 = document.getElementById("P5");
let C5 = document.getElementById("C5");

let S6 = document.getElementById("S6");
let D6 = document.getElementById("D6");
let P6 = document.getElementById("P6");
let C6 = document.getElementById("C6");

let S7 = document.getElementById("S7");
let D7 = document.getElementById("D7");
let P7 = document.getElementById("P7");
let C7 = document.getElementById("C7");

let S8 = document.getElementById("S8");
let D8 = document.getElementById("D8");
let P8 = document.getElementById("P8");
let C8 = document.getElementById("C8");



S1.addEventListener("click",()=>{
    C1.innerHTML=` <div class="accordion accordion-borderless" id="accordionFlushExampleX">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOneX">
      <button data-mdb-collapse-init class="accordion-button" type="button"
        data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOneX" class="accordion-collapse collapse show"
      aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the first item's accordion body.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwoX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the second item's accordion body.
        Let's imagine this being filled with some actual content.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThreeX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThreeX" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the third item's accordion body.
        Nothing more exciting happening here in terms of content, but just filling up
        the space to make it look, at least at first glance, a bit more representative
        of how this would look in a real-world application.
      </div>
    </div>
  </div>
</div>
    `
    S1.classList.add("active");
    D1.classList.remove("active");
    P1.classList.remove("active");
});

D1.addEventListener("click",()=>{
    C1.innerHTML=` 

          <div class="card text-center mt-3">
            <div class="card-header">DEMO LECTURE</div>
            <div class="card-body">
              <h5 class="card-title">ATTEND THIS SATURDAY ON 7 JUNE</h5>
              <p class="card-text">LINK :- <a href="#"><u>https://meet.google.com/nuy-ouol-rej</u></a> </p>
              <a href="#" class="btn btn-primary" data-mdb-ripple-init>Join</a>
            </div>
            <div class="card-footer text-muted">2 days ago</div>
          </div>

        </div>
    `
    
    D1.classList.add("active");
    P1.classList.remove("active");
    S1.classList.remove("active");
});

P1.addEventListener("click",()=>{
    C1.innerHTML=`  
// <style>
// body{
// overflow:scrollbar;

// }
// </style>
          <div class="table-responsive mt-3">
            <table class="table align-middle mb-0 bg-white">
              <thead class="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">Sumit Singhania</p>
                        <p class="text-muted mb-0">boisarkasumit@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Software engineer</p>
                    <p class="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Active</span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm btn-rounded">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">Kushal Pileswala</p>
                        <p class="text-muted mb-0">aagayaswad@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Consultant</p>
                    <p class="text-muted mb-0">Finance</p>
                  </td>
                  <td>
                    <span class="badge badge-primary rounded-pill d-inline">Onboarding</span>
                  </td>
                  <td>Junior</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm btn-rounded fw-bold" data-mdb-ripple-color="dark">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">Niraj BurmundaKumar</p>
                        <p class="text-muted mb-0">paisapaisapaisa@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Designer</p>
                    <p class="text-muted mb-0">UI/UX</p>
                  </td>
                  <td>
                    <span class="badge badge-warning rounded-pill d-inline">Awaiting</span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm btn-rounded fw-bold" data-mdb-ripple-color="dark">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
    `
    P1.classList.add("active");

    D1.classList.remove("active");
     S1.classList.remove("active");
});
// nahi hua hai mujhe laga itne aache se dekh raha hai  2 extend n metod n static n obj creted
