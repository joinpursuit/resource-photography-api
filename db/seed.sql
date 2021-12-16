\c photography_api_dev;
INSERT INTO
    photographers (preferred_name, surname, unsplash_profile_url)
VALUES (
        'Marek',
        'Piwnicki',
        'https://unsplash.com/@marekpiwnicki'
    ), (
        'Arpit',
        'Dhore',
        'https://unsplash.com/@arpit_dhore'
    ), (
        'Annie',
        'Spratt',
        'https://unsplash.com/@anniespratt'
    );
INSERT INTO
    photographs (direct_url, unsplash_url, photographer_id)
VALUES (
        'https://images.unsplash.com/photo-1639514922255-d5563344d579',
        'https://unsplash.com/photos/gWs2MEfba0s', (
            SELECT
                DISTINCT id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@marekpiwnicki'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1639429192929-de8734be35c2', 'https://unsplash.com/photos/Bn_Hdji2ClE', (
            SELECT
                DISTINCT id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@marekpiwnicki'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1639085532920-d7b97cf4bb34', 'https://unsplash.com/photos/7mswFjg8rYY', (
            SELECT
                DISTINCT id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@marekpiwnicki'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1637379942364-bfa13d0924e7', 'https://unsplash.com/photos/I6iaaAihJzA', (
            SELECT
                id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@arpit_dhore'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1637419000300-5f5fb8b70eea', 'https://unsplash.com/photos/LOO2igDiXuY', (
            SELECT
                id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@arpit_dhore'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1639638176354-bfc5b3f00b05', 'https://unsplash.com/photos/GZ4QcZQIdi4', (
            SELECT
                id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@anniespratt'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1639218690251-b291a6e7760e', 'https://unsplash.com/photos/PhcZT6S-dwA', (
            SELECT
                id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@anniespratt'
            LIMIT
                1
        )
    ), (
        'https://images.unsplash.com/photo-1638012514383-62d7e922f898', 'https://unsplash.com/photos/8H9w2UWyx0E', (
            SELECT
                id
            FROM
                photographers
            WHERE
                unsplash_profile_url = 'https://unsplash.com/@anniespratt'
            LIMIT
                1
        )
    );