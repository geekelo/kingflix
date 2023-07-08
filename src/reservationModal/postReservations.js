// export default class PostResevation {
//   constructor() {
//     this.reservationForm = document.querySelector('.reservationForm');
//     this.username = document.querySelector('#username');
//     this.startDate = document.querySelector('#startDate');
//     this.endDate = document.querySelector('#endDate');
//     this.movieId = 0;
//   }

//   async postReservation(data) {
//     try {
//       await fetch(
//         'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XTyHQABn3ej42SK28nbc/reservations',
//         {
//           method: 'POST',
//           body: JSON.stringify(data),
//           headers: {
//             'Content-type': 'application/json',
//           },
//         },
//       );
//     } catch (error) {
//       throw new Error('Unable to post');
//     }

//     // update displayed reservations

//     this.displayReservations(this.movieId);
//   }

//   setupListener() {
//     this.reservationForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const data = {
//         item_id: `item${this.movieId}`,
//         username: this.username.value,
//         date_start: this.startDate.value,
//         date_end: this.endDate.value,
//       };

//       this.postReservation(data);
//       this.username.value = '';
//       this.startDate.value = '';
//       this.endDate.value = '';
//     });
//   }
// }
