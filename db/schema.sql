DROP TABLE
    IF EXISTS unit_types CASCADE;

DROP TABLE
    IF EXISTS actions CASCADE;

DROP TABLE
    IF EXISTS phases CASCADE;

DROP TABLE
    IF EXISTS seasons CASCADE;

DROP TABLE
    IF EXISTS users CASCADE;

DROP TABLE
    IF EXISTS games CASCADE;

DROP TABLE
    IF EXISTS countries CASCADE;

DROP TABLE
    IF EXISTS maps CASCADE;

DROP TABLE
    IF EXISTS locations CASCADE;

DROP TABLE
    IF EXISTS borders CASCADE;

DROP TABLE
    IF EXISTS coasts CASCADE;

DROP TABLE
    IF EXISTS coast_borders CASCADE;

DROP TABLE
    IF EXISTS service_providers CASCADE;

DROP TABLE
    IF EXISTS user_chat_services CASCADE;

DROP TABLE
    IF EXISTS players CASCADE;

DROP TABLE
    IF EXISTS turns CASCADE;

DROP TABLE
    IF EXISTS map_locations CASCADE;

DROP TABLE
    IF EXISTS units CASCADE;

DROP TABLE
    IF EXISTS orders CASCADE;

CREATE TABLE
    IF NOT EXISTS unit_types (id SERIAL PRIMARY KEY, unit_type CHAR(4) NOT NULL);

CREATE TABLE
    IF NOT EXISTS actions (id SERIAL PRIMARY KEY, "action" VARCHAR(12) NOT NULL);

CREATE TABLE
    IF NOT EXISTS phases (id SERIAL PRIMARY KEY, phase VARCHAR(12) NOT NULL);

CREATE TABLE
    IF NOT EXISTS seasons (id SERIAL PRIMARY KEY, season VARCHAR(12) NOT NULL);

CREATE TABLE
    IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        "user_name" TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT TRUE
    );

CREATE TABLE
    IF NOT EXISTS games (
        id SERIAL PRIMARY KEY,
        "name" TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        started_on TIMESTAMPTZ,
        next_turn_due_on TIMESTAMPTZ,
        ended_on TIMESTAMPTZ
    );

CREATE TABLE
    IF NOT EXISTS countries (
        id SERIAL PRIMARY KEY,
        "name" TEXT NOT NULL,
        abbreviation CHAR(3) NOT NULL,
        adjective TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS maps (id SERIAL PRIMARY KEY, svg TEXT NOT NULL);

CREATE TABLE
    IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        "name" TEXT NOT NULL,
        short_name TEXT NOT NULL,
        is_maritime BOOLEAN NOT NULL,
        is_terrestrial BOOLEAN NOT NULL,
        is_landlocked BOOLEAN NOT NULL,
        is_supply_center BOOLEAN NOT NULL,
        initial_country_id INTEGER,
        CONSTRAINT fk_initial_country_id FOREIGN KEY (initial_country_id) REFERENCES countries (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS borders (
        id SERIAL PRIMARY KEY,
        location_a INTEGER NOT NULL,
        location_b INTEGER NOT NULL,
        CONSTRAINT fk_location_a FOREIGN KEY (location_a) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_location_b FOREIGN KEY (location_b) REFERENCES locations (id)
        ON DELETE NO ACTION,
        UNIQUE(location_a, location_b)
    );

CREATE TABLE
    IF NOT EXISTS coasts (
        id SERIAL PRIMARY KEY,
        location_id INTEGER NOT NULL,
        "position" VARCHAR(6) NOT NULL,
        CONSTRAINT fk_location_id FOREIGN KEY (location_id) REFERENCES locations (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS coast_borders (
        id SERIAL PRIMARY KEY,
        coast_id INTEGER NOT NULL,
        border_id INTEGER NOT NULL,
        CONSTRAINT fk_coast_id FOREIGN KEY (coast_id) REFERENCES coasts (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_border_id FOREIGN KEY (border_id) REFERENCES borders (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS service_providers(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        url TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS user_chat_services (
        id SERIAL PRIMARY KEY,
        "user_id" INTEGER NOT NULL,
        service_provider_id INTEGER NOT NULL,
        service_provider_user_id INTEGER NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        last_used_at TIMESTAMPTZ,
        CONSTRAINT fk_user_id FOREIGN KEY ("user_id") REFERENCES users (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_service_provider_id FOREIGN KEY (service_provider_id) REFERENCES service_providers (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        "user_id" INTEGER NOT NULL,
        country_id INTEGER NOT NULL,
        game_id INTEGER NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        ended_at TIMESTAMPTZ,
        is_winner BOOLEAN,
        CONSTRAINT fk_user_id FOREIGN KEY ("user_id") REFERENCES users (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_country_id FOREIGN KEY (country_id) REFERENCES countries (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_game_id FOREIGN KEY (game_id) REFERENCES games (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS turns (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        finalized_at TIMESTAMPTZ,
        game_id INTEGER NOT NULL,
        "year" INTEGER NOT NULL,
        phase_id INTEGER NOT NULL,
        season_id INTEGER NOT NULL,
        map_id INTEGER NOT NULL,
        CONSTRAINT fk_game_id FOREIGN KEY (game_id) REFERENCES games (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_phase_id FOREIGN KEY (phase_id) REFERENCES phases (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_season_id FOREIGN KEY (season_id) REFERENCES seasons (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_map_id FOREIGN KEY (map_id) REFERENCES maps (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS map_locations (
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
    IF NOT EXISTS initial_units (
        id SERIAL PRIMARY KEY,
        unit_type_id INTEGER NOT NULL,
        location_id INTEGER NOT NULL,
        country_id INTEGER NOT NULL,
        coast_id INTEGER,
        CONSTRAINT fk_unit_type_id FOREIGN KEY (unit_type_id) REFERENCES unit_types (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_location_id FOREIGN KEY (location_id) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_country_id FOREIGN KEY (country_id) REFERENCES countries (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_coast_id FOREIGN KEY (coast_id) REFERENCES coasts (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS units (
        id SERIAL PRIMARY KEY,
        unit_type_id INTEGER NOT NULL,
        location_id INTEGER NOT NULL,
        player_id INTEGER NOT NULL,
        coast_id INTEGER,
        CONSTRAINT fk_unit_type_id FOREIGN KEY (unit_type_id) REFERENCES unit_types (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_location_id FOREIGN KEY (location_id) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES players (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_coast_id FOREIGN KEY (coast_id) REFERENCES coasts (id)
        ON DELETE NO ACTION
    );

CREATE TABLE
    IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        player_id INTEGER NOT NULL,
        turn_id INTEGER NOT NULL,
        unit_id INTEGER NOT NULL,
        destination_id INTEGER NOT NULL,
        giving_support_to_unit_id INTEGER,
        action_id INTEGER NOT NULL DEFAULT 1,
        CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES players (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_turn_id FOREIGN KEY (turn_id) REFERENCES turns (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_unit_id FOREIGN KEY (unit_id) REFERENCES units (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_destination_id FOREIGN KEY (destination_id) REFERENCES locations (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_supporting_unit_id FOREIGN KEY (giving_support_to_unit_id) REFERENCES units (id)
        ON DELETE NO ACTION,
        CONSTRAINT fk_action_id FOREIGN KEY (action_id) REFERENCES actions (id)
        ON DELETE NO ACTION
    );