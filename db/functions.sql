create or replace function get_user_id_from_player_id (player_id) return int as $$
    SELECT user_id FROM players WHERE id = player_id;
$$ language sql;
