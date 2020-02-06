

export const offers = {};

const dd = new Date();
for (let i = 0; i < 10; i++) {
    offers[i] = {
        "id": i, "date": new Date(dd.setMinutes(dd.getMinutes() + i * 10)).toDateString(), "amount": (Math.random() * 10).toFixed(2),
        "bid": 9.5 + Math.round(Math.random())
    }

}