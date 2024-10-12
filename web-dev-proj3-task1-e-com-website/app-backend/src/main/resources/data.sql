INSERT INTO sizes(name, in_stock)
VALUES ('XXS', true),
       ('XS', true),
       ('S', true),
       ('M', true),
       ('L', true),
       ('XL', true),
       ('XXL', true),
       ('XXXL', false);

INSERT INTO colors(name, classes, selected_classes)
VALUES ('White', 'bg-white', 'ring-gray-400'),
       ('Gray', 'bg-gray-200', 'ring-gray-400'),
       ('Black', 'bg-gray-900', 'ring-gray-900')
