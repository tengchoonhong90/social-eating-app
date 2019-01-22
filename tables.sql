CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    display_pic TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    event_name TEXT,
    event_type TEXT,
    meeting_time TEXT,
    location TEXT,
    photo TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users_events (
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    events_id INTEGER
);

CREATE TABLE IF NOT EXISTS groups (
    id SERIAL PRIMARY KEY,
    group_name TEXT,
    group_picture TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users_groups (
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    groups_id INTEGER
)