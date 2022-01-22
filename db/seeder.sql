CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        user_name TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        created_on TIMESTAMPTZ DEFAULT CURRENT_TIME,
        is_active BOOLEAN DEFAULT TRUE
    );

CREATE TABLE
    games (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        created_on TIMESTAMPTZ DEFAULT CURRENT_TIME,
        started_on TIMESTAMPTZ,
        next_turn_due_on TIMESTAMPTZ,
        ended_on TIMESTAMPTZ,
    );

CREATE TABLE
    countries(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        abbreviation CHAR(3) NOT NULL,
        adjective TEXT NOT NULL
    );

CREATE TABLE
    maps(id SERIAL PRIMARY KEY, svg TEXT NOT NULL);

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
        CONSTRAINT fk_initial_country FOREIGN KEY (initial_country_id) REFERENCES countries (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    borders(
        ID SERIAL PRIMARY KEY,
        location_a INTEGER NOT NULL,
        location_b INTEGER NOT NULL,
        CONSTRAINT fk_location_a FOREIGN KEY (location_a) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_location_b FOREIGN KEY (location_b) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CHECK (location_a < location_b)
    );

CREATE TABLE
    coasts(
        id SERIAL PRIMARY KEY,
        location_id INTEGER NOT NULL,
        POSITION VARCHAR(6) NOT NULL,
        CONSTRAINT fk_location_id FOREIGN KEY (location_id) REFERENCES locations (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    coast_borders(
        id SERIAL PRIMARY KEY,
        coast_id INTEGER NOT NULL,
        border_id INTEGER NOT NULL,
        CONSTRAINT fk_coast_id FOREIGN KEY (coast_id) REFERENCES coasts (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_border_id FOREIGN KEY (border_id) REFERENCES borders (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    service_providers(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        url TEXT NOT NULL
    );

CREATE TABLE
    user_chat_services(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        service_provider_id INTEGER NOT NULL,
        service_provider_user_id INTEGER NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIME,
        last_used_at TIMESTAMPTZ,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_service_provider_id FOREIGN KEY (service_provider_id) REFERENCES service_providers (id)
        ON DELETE NO ACTION
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
            ON DELETE NO ACTION
    );

CREATE TABLE
    map_locations(
        id SERIAL PRIMARY KEY,
        map_id INTEGER NOT NULL,
        locations_id INTEGER NOT NULL,
        current_ownership_country_id INTEGER NOT NULL,
        CONSTRAINT fk_map_id FOREIGN KEY (map_id) REFERENCES maps (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_locations_id FOREIGN KEY (locations_id) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_current_ownership_country_id FOREIGN KEY (current_ownership_country_id) REFERENCES countries (id)
        ON DELETE NO ACTION
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

CREATE TABLE
    orders(
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIME,
        player_id INTEGER NOT NULL,
        turn_id INTEGER NOT NULL,
        unit_id INTEGER NOT NULL,
        destination_id INTEGER NOT NULL,
        supporting_unit_id INTEGER,
        action VARCHAR(10) NOT NULL DEFAULT 'HOLD',
        CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES players (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_turn_id FOREIGN KEY (turn_id) REFERENCES turns (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_unit_id FOREIGN KEY (unit_id) REFERENCES units (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_destination_id FOREIGN KEY (destination_id) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_supporting_unit_id FOREIGN KEY (supporting_unit_id) REFERENCES units (id)
        ON DELETE NO ACTION
    );