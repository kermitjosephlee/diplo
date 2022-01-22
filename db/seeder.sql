CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        user_name TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        created_on TIMESTAMP
        WITH
            TIME ZONE DEFAULT CURRENT_TIME,
    );

CREATE TABLE
    games (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        created_on TIMESTAMP
        WITH
            TIME ZONE DEFAULT CURRENT_TIME,
            started_on TIMESTAMP
        WITH
            TIME ZONE,
            ended_on TIMESTAMP
        WITH
            TIME ZONE,
            is_active BOOLEAN DEFAULT TRUE,
    );

CREATE TABLE
    players (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        country_id INTEGER NOT NULL,
        game_id INTEGER NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIME,
        ended_at TIMESTAMPTZ,
        is_winner BOOLEAN,
        CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
        ON DELETE
        SET
            NULL,
            CONSTRAINT fk_country FOREIGN KEY (country_id) REFERENCES countries (id)
            ON DELETE
        SET
            NULL,
            CONSTRAINT fk_game FOREIGN KEY (game_id) REFERENCES games (id)
            ON DELETE
        SET
            NULL
    );

CREATE TABLE
    borders();

CREATE TABLE
    chat_services();

CREATE TABLE
    coast_borders();

CREATE TABLE
    coasts();

CREATE TABLE
    countries(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        abbreviation CHAR(3) NOT NULL,
        adjective TEXT NOT NULL
    );

CREATE TABLE
    locations(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        short_name TEXT NOT NULL,
        is_maritime BOOLEAN NOT NULL,
        is_terrestrial BOOLEAN NOT NULL,
        is_landlocked BOOLEAN NOT NULL,
        is_supply_center BOOLEAN NOT NULL,
        initial_country_id INTEGER,
        CONSTRAINT fk_initial_country FOREIGN KEY (initial_country_id) REFERENCES country (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    map_locations();

CREATE TABLE
    maps();

CREATE TABLE
    orders();

CREATE TABLE
    turns(
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIME NOT NULL,
        finalized_at TIMESTAMPTZ,
        game_id INTEGER NOT NULL,
        YEAR INTEGER NOT NULL,
        phase VARCHAR(10) NOT NULL,
        season VARCHAR(10) NOT NULL,
        map_id INTEGER NOT NULL,
        CONSTRAINT fk_game FOREIGN KEY (game_id) REFERENCES games (id)
        ON DELETE
        SET
            NULL,
            CONSTRAINT fk_map FOREIGN KEY (map_id) REFERENCES maps (id)
            ON DELETE NO ACTION,
    );

CREATE TABLE
    units(
        id SERIAL PRIMARY KEY,
        unit_type CHAR(4) NOT NULL,
        location_id INTEGER NOT NULL,
        player_id INTEGER NOT NULL,
        coast_id INTEGER,
        CONSTRAINT fk_location FOREIGN KEY (location_id) REFERENCES location (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES players (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_coast FOREIGN KEY (coast_id) REFERENCES coasts (id)
        ON DELETE NO ACTION
    );