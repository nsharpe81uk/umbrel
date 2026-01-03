db.getSiblingDB("unifi").createUser({
user: "unifi",
pwd: "E+;oL6$H1<E4|HD1",
roles: [{ role: "dbOwner", db: "unifi" }]
});