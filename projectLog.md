# Diplo JS

## Project Log

---

### Purpose

2022-01-23

I was reading over the `README` file and it's already out of date. The purpose of this file is to have a log to document what I've done, what I've learned and what I want to do in the near future.

Something in the doing is that I have an idea of what this could be and it tends to expand in scope from either what I want this to be, or what I think it would be useful for me to learn or practice. So for my future self, I want to be able to look back and cement in my mind how and why I did things on this project.

---

2022-01-24

- [x] - create a seed file with test data for users, players, game

---

2022-01-23

#### Next day goals:

- [ ] - setup JS functions to help with...
    - [ ] - new game id
    - [ ] - create new user
    - [ ] - create new game
    - [ ] - create players

- [ ] - STRETCH - add in svg text to `maps` table
    - [ ] - create new map
    - [ ] - retrive stored map

Yesterday I wrapped up the schema and seeding scripts for the project. I have found sql really daunting. A little less now, but the concepts feel deceptively intuitive, like they feel intuitive but then when you ask your intuition to lead it feels unfamiliar.

An example.

Before bothering with SQL, I was using node-fs and JSON stringify and parse to make data into text and back again. So when I had a one-to-many relationship, it was a simple array.

```
location: {
  name: "London"
  borderingLocations: ["North Sea", "English Channel", ...rest]
}
```

But now in the sql tables, instead of other locations "bordering" the location in question, we've introduced the concept of a `border`. Each `border` has a unique `id` and is definded by `location_a` and `location_b`.

The `borders` table

```
CREATE TABLE borders (
  id SERIAL PRIMARY KEY,
  location_a INTEGER NOT NULL,
  location_b INTEGER NOT NULL,
  unique(location_a, location_b),
  <...foreign key constraints code goes here>
);
```

Now to fetch the bordering locations around a specific location, all we need is the `id` of the location in question and this query

```
SELECT * FROM borders WHERE location_a = location_id OR location_b = location_id;
```

The conceptual jump for me was to stop thinking in terms of an item having a list of things.

```
{
  item: [thing1, thing2, ...rest]
}
```

But to instead a row that would show the relationship between the item and each thing.

```
id  |  item_id  |  thing_id
____________________________

1      1           1
2      1           2
3      1           3
...rest
```

This might not seem like a huge paradigm shift but it does change how one shapes and stores code. JS might have gotten me into code, now the challenge is to see if I can think about code in other ways.

---

// **_ End of File _**
