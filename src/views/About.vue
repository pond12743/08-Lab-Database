<template>
  <div class="about">
    <div>
      <span class="text middle" data-text="Covid Form"></span>
    </div>
    <div class="bg-image" 
     style="background-image: url('https://media.istockphoto.com/vectors/abstract-medical-background-with-flat-icons-and-symbols-concepts-and-vector-id1135100330?k=20&m=1135100330&s=612x612&w=0&h=k6gowDracCMR2Hy1K9Dm2ehWcIXuEUD-v5Hza9NtecE=');
            height: 100vh">
      <div class="gradiant-bg"><h1>Covid-19</h1></div>
      <form @submit.prevent="addData">
        <div class="card-body">
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="floatingInput"
              placeholder="date"
              v-model="date"
            />
            <label for="floatingInput">Date</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="name"
              v-model="name"
            />
            <label for="floatingInput">Name & Lastname</label>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              v-model="atk"
            >
              <option value="+">+ positive</option>
              <option value="-">- negative</option>
            </select>
            <label for="floatingSelect">selects</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              class="form-control"
              id="floatingInput"
              placeholder="phone number"
              v-model="tel"
            />
            <label for="floatingInput">Number telephone</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="d-grid gap-2 d-md-block">
            <button type="submit" class="bg-info text-white">ADD DATA</button>
          </div>
        </div>
      </form>
      <div class="card-body">
        <table class="container table table-striped table-hover">
          <thead>
            <tr class="tx">
              <th scope="col">Date</th>
              <th scope="col">Name & Lastname</th>
              <th scope="col">ATK result</th>
              <th scope="col">Number telephone</th>
              <th scope="col">Email address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in csDoc" :key="index" align="center">
              <td>{{ i.data.date1 }}</td>
              <td>{{ i.data.name1 }}</td>
              <td>{{ i.data.atkresult }}</td>
              <td>{{ i.data.telnumber }}</td>
              <td>{{ i.data.email1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import db from "../plugins/firebase1";

export default {
  data() {
    return {
      csDoc: [],
      name: "",
      email: "",
      atk: "",
      tel: "",
      date: "",
    };
  },
  beforeMount() {
    this.readData();
  },
  methods: {
    async addData() {
      try {
        this.csDoc = [];
        const docRef = await addDoc(collection(db, "covidtable"), {
          name1: this.name,
          email1: this.email,
          atkresult: this.atk,
          telnumber: this.tel,
          date1: this.date,
        });
        this.name = "";
        this.email = "";
        this.atk = "";
        this.tel = "";
        this.date = "";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    readData() {
      this.csDoc = [];
      const q = query(collection(db, "covidtable"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.csDoc.push({ id: doc.id, data: doc.data() });
        });
        // console.log("Current cities in CA: ", this.csDoc.join(", "));
      });
    },
  },
};
</script>

<style>
.gradiant-bg{
   background: linear-gradient( 80deg, #0acffe, #495aff);
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 2s infinite;
}

.tx{
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient( 80deg, #2af598, #009efd);
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 2s infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}


</style>
