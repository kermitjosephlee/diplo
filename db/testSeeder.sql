INSERT INTO
    users (first_name, last_name, "user_name", password, email)
VALUES (
        'alpha',
        'alpha',
        'alpha',
        '123qweasd',
        'alpha@alpha.com'
    ), (
        'bravo',
        'bravo',
        'bravo',
        '123qweasd',
        'bravo@bravo.com'
    ), (
        'charlie',
        'charlie',
        'charlie',
        '123qweasd',
        'charlie@charlie.com'
    ), (
        'delta',
        'delta',
        'delta',
        '123qweasd',
        'delta@delta.com'
    ), ('echo', 'echo', 'echo', '123qweasd', 'echo@echo.com'), (
        'foxtrot',
        'foxtrot',
        'foxtrot',
        '123qweasd',
        'foxtrot@foxtrot.com'
    ), ('golf', 'golf', 'golf', '123qweasd', 'golf@golf.com');

INSERT INTO
    games (
        "name",
        created_at,
        started_on,
        next_turn_due_on,
        admin_id
    )
VALUES (
        'first', (NOW() - INTERVAL '1 day'),
        NOW(), (NOW() + INTERVAL '1 hour'),
        1
    );

INSERT INTO
    players ("user_id", country_id, game_id)
VALUES (1, 1, 1), (2, 2, 1), (3, 3, 1), (4, 4, 1), (5, 5, 1), (6, 6, 1), (7, 7, 1);