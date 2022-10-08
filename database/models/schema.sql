/*========== DATABASE ==========*/

\c recipease;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS branded_foods CASCADE;
DROP TABLE IF EXISTS ingredient_list CASCADE;
DROP TABLE IF EXISTS recipe_book CASCADE;
DROP TABLE IF EXISTS shopping_list CASCADE;
DROP TABLE IF EXISTS shopping_trip CASCADE;
DROP TABLE IF EXISTS workouts CASCADE;
DROP TABLE IF EXISTS breakfast CASCADE;
DROP TABLE IF EXISTS lunch CASCADE;
DROP TABLE IF EXISTS dinner CASCADE;
DROP TABLE IF EXISTS snack CASCADE;
DROP TABLE IF EXISTS journal CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id                 SERIAL PRIMARY KEY,
  username           TEXT,
  calories           SMALLINT,
  activity_level     SMALLINT
);
CREATE TABLE IF NOT EXISTS recipes (
  id                SERIAL PRIMARY KEY,
  recipe_name       TEXT,
  recipe_img        TEXT,
  servings          SMALLINT,
  prep_time         SMALLINT,
  instructions      TEXT,
  calories          SMALLINT,
  total_fat         NUMERIC,
  sat_fat           NUMERIC,
  trans_fat         NUMERIC,
  poly_fat          NUMERIC,
  mono_fat          NUMERIC,
  cholesterol       NUMERIC,
  sodium            NUMERIC,
  total_carbs       NUMERIC,
  fiber             NUMERIC,
  sugar             NUMERIC,
  protein           NUMERIC,
  vitamin_d         NUMERIC,
  calcium           NUMERIC,
  iron              NUMERIC,
  potassium         NUMERIC
);
CREATE TABLE IF NOT EXISTS ingredients (
  id                SERIAL PRIMARY KEY,
  fdc_id            BIGINT,
  ingredient        TEXT,
  ingredient_img    TEXT,
  brand             TEXT,
  food_category     TEXT,
  upc               TEXT,
  serving_size      NUMERIC,
  serving_unit      TEXT,
  calories          NUMERIC,
  total_fat         NUMERIC,
  sat_fat           NUMERIC,
  trans_fat         NUMERIC,
  poly_fat          NUMERIC,
  mono_fat          NUMERIC,
  cholesterol       NUMERIC,
  sodium            NUMERIC,
  total_carbs       NUMERIC,
  fiber             NUMERIC,
  sugar             NUMERIC,
  protein           NUMERIC,
  vitamin_a         NUMERIC,
  vitamin_c         NUMERIC,
  vitamin_d         NUMERIC,
  calcium           NUMERIC,
  iron              NUMERIC,
  potassium         NUMERIC
);

-- TODO create for loop that will iterate over the fdc_id and make an API call to fetch the rest of the needed data, then write the returned data to the database in the correct columns.


CREATE TABLE IF NOT EXISTS branded_foods (
  -- id                SERIAL PRIMARY KEY,
  fdc_id            BIGINT,
  brand_owner       TEXT,
  brand_name        TEXT,
  subbrand_name     TEXT,
  gtin_upc          TEXT,
  ingredients       TEXT,
  not_a_sig         TEXT,
  serving_size      TEXT,
  serving_unit      TEXT,
  household_serving TEXT,
  food_category     TEXT,
  data_source       TEXT,
  package           TEXT,
  modified          TEXT,
  available         TEXT,
  market_country    TEXT,
  discontiued       TEXT,
  prep              TEXT,
  trade_channel     TEXT
);

COPY branded_foods
  FROM '/home/sbirvin1s/hackreactor/recip-ease/FoodData_Central_branded_food_csv_2022-04-28/branded_food.csv'
  DELIMITER ','
  CSV HEADER
;
COPY food_nutrient
  FROM '/home/sbirvin1s/hackreactor/recip-ease/FoodData_Central_branded_food_csv_2022-04-28/food_nutrient.csv'
  DELIMITER ','
  CSV HEADER
;
CREATE TABLE IF NOT EXISTS food (
  fdc_id            BIGINT,
  data_type         TEXT,
  description       TEXT,
  food_category_id  TEXT,
  publication_date  TEXT
);
COPY food
  FROM '/home/sbirvin1s/hackreactor/recip-ease/FoodData_Central_branded_food_csv_2022-04-28/food.csv'
  DELIMITER ','
  CSV HEADER
;

UPDATE branded_foods
SET serving_size =
  CASE
    WHEN COALESCE(serving_size, '') = ''
      THEN 0
    ELSE CAST(serving_size AS NUMERIC)
  END;

ALTER TABLE branded_foods
ALTER COLUMN serving_size
TYPE NUMERIC
USING serving_size::NUMERIC;

--branded food queries
  INSERT INTO ingredients (fdc_id)
  SELECT fdc_id
  FROM branded_foods;

  UPDATE ingredients
  SET ingredient = food.description
  FROM food
  WHERE ingredients.fdc_id = food.fdc_id;
  UPDATE ingredients
  SET brand = branded_foods.brand_owner,
      upc = branded_foods.gtin_upc,
      serving_unit = branded_foods.serving_unit,
      food_category = branded_foods.food_category,
      serving_size = branded_foods.serving_size
  FROM branded_foods
  WHERE ingredients.fdc_id = branded_foods.fdc_id;

  UPDATE ingredients
  SET calories = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '208';

  UPDATE ingredients
  SET total_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '204';

  UPDATE ingredients
  SET sat_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '606';

  UPDATE ingredients
  SET trans_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '605';

  UPDATE ingredients
  SET poly_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '646';

  UPDATE ingredients
  SET mono_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '645';

  UPDATE ingredients
  SET cholesterol = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '601';

  UPDATE ingredients
  SET sodium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '307';

  UPDATE ingredients
  SET total_carbs = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '205';

  UPDATE ingredients
  SET fiber = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '291';

  UPDATE ingredients
  SET sugar = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '269';

  UPDATE ingredients
  SET protein = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '203';

  UPDATE ingredients
  SET vitamin_a = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '318';

  UPDATE ingredients
  SET vitamin_c = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '401';

  UPDATE ingredients
  SET vitamin_d = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '324';

  UPDATE ingredients
  SET calcium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '301';

  UPDATE ingredients
  SET iron = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '303';

  UPDATE ingredients
  SET potassium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '306';

-- foundation queries
    INSERT INTO ingredients (fdc_id)
  SELECT fdc_id
  FROM branded_foods;

  UPDATE ingredients
  SET ingredient = food.description
  FROM food
  WHERE ingredients.fdc_id = food.fdc_id;
  UPDATE ingredients
  SET brand = branded_foods.brand_owner,
      upc = branded_foods.gtin_upc,
      serving_unit = branded_foods.serving_unit,
      food_category = branded_foods.food_category,
      serving_size = branded_foods.serving_size
  FROM branded_foods
  WHERE ingredients.fdc_id = branded_foods.fdc_id;

  UPDATE ingredients
  SET calories = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '208';

  UPDATE ingredients
  SET total_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '204';

  UPDATE ingredients
  SET sat_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '606';

  UPDATE ingredients
  SET trans_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '605';

  UPDATE ingredients
  SET poly_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '646';

  UPDATE ingredients
  SET mono_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '645';

  UPDATE ingredients
  SET cholesterol = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '601';

  UPDATE ingredients
  SET sodium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '307';

  UPDATE ingredients
  SET total_carbs = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '205';

  UPDATE ingredients
  SET fiber = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '291';

  UPDATE ingredients
  SET sugar = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '269';

  UPDATE ingredients
  SET protein = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '203';

  UPDATE ingredients
  SET vitamin_a = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '318';

  UPDATE ingredients
  SET vitamin_c = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '401';

  UPDATE ingredients
  SET vitamin_d = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '324';

  UPDATE ingredients
  SET calcium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '301';

  UPDATE ingredients
  SET iron = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '303';

  UPDATE ingredients
  SET potassium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND food_nutrient.nutrient_id = '306';
CREATE TABLE IF NOT EXISTS ingredient_list (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipes (id),
  ingredient_id     SERIAL REFERENCES ingredients (id)
);

CREATE TABLE IF NOT EXISTS recipe_book (
  id                 SERIAL PRIMARY KEY,
  user_id            SERIAL REFERENCES users (id),
  recipe_id          SERIAL REFERENCES recipes (id)
);

CREATE TABLE IF NOT EXISTS shopping_list (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  recipe_id         SERIAL REFERENCES recipes (id)
);

CREATE TABLE IF NOT EXISTS shopping_trip (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  list_id           SERIAL REFERENCES shopping_list (id),
  shopping_date     DATE
);

CREATE TABLE IF NOT EXISTS workouts (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  workout_type      TEXT,
  workout_date      DATE,
  duration          SMALLINT,
  calories_burned   SMALLINT
);

CREATE TABLE IF NOT EXISTS breakfast (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipes (id),
  ingredient_id     SERIAL REFERENCES ingredients (id)
);

CREATE TABLE IF NOT EXISTS lunch (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipes (id),
  ingredient_id     SERIAL REFERENCES ingredients (id)
);

CREATE TABLE IF NOT EXISTS dinner (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipes (id),
  ingredient_id     SERIAL REFERENCES ingredients (id)
);

CREATE TABLE IF NOT EXISTS snack (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipes (id),
  ingredient_id     SERIAL REFERENCES ingredients (id)
);

CREATE TABLE IF NOT EXISTS journal (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  journal_date      DATE,
  breakfast_id      SERIAL REFERENCES breakfast (id),
  lunch_id          SERIAL REFERENCES lunch (id),
  dinner_id         SERIAL REFERENCES dinner (id),
  snack_id          SERIAL REFERENCES snack (id)
);

-- CREATE INDEX IF NOT EXISTS something ON something ()