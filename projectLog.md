# Diplo JS

## Project Log

---

### Purpose

2022-01-23

I was reading over the `README` file and it's already out of date. The purpose of this file is to have a log to document what I've done, what I've learned and what I want to do in the near future.

Something in the doing is that I have an idea of what this could be and it tends to expand in scope from either what I want this to be, or what I think it would be useful for me to learn or practice. So for my future self, I want to be able to look back and cement in my mind how and why I did things on this project.

---

2022-02-06

Had a chat with Tim and was feeling I was hitting a bit of a wall. With this new db setup, all the node code I wrote around a year ago is very antiquated and in need of a serious rewrite. I am feeling like it is precious and that in order to move forward, I have to shed it and move forward with a courage I haven't come up with yet.

Something that is coming up is whether to write postgres functions to keep the business logic more towards the db layer. Or at least some of the more common requests abstracted out from the server code. May be helpful. May just be something that I have to keep in sync with server code. The bike shedding is not helping matters.

Something else - I'm going to try to write more of this code exclusively in vim to get my vim skills up. I've already fiddled with setup and plugins, so now it's getting on with the task of grokking the commands and getting used to the experience.

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

2022-07-26

Finally getting back into this. I have GitHub Co-pilot turned on right now and the suggestions are hilarious.

Updates:
- ditched primsa and wrote the DB schema and seedings from scratch.
- pretty happy with how it turned out but it's been so long since I've dug into this project (again) that I need some time to look around and get familiar
- got sucked into another side project but this time with old code friends so it's was less of a solitary task

Next Steps:
- the next thing to do is to update the CLI prompts to accept valid orders and write them to the DB
- might have to spin up an instance of Postgres on my local or maybe use Supabase in light of the changes to Heroku

// **_ End of File _**
