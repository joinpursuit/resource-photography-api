DROP DATABASE IF EXISTS photography_api_dev;
CREATE DATABASE photography_api_dev;

\c photography_api_dev;

-- DROP TABLE IF EXISTS photographers;
CREATE TABLE
  photographers (
    id SERIAL PRIMARY KEY,
    preferred_name TEXT,
    surname TEXT,
    unsplash_profile_url TEXT
  );
-- DROP TABLE IF EXISTS photographs;
CREATE TABLE
  photographs (
    id SERIAL PRIMARY KEY,
    direct_url TEXT,
    unsplash_url TEXT,
    photographer_id INTEGER REFERENCES photographers (id)
  );