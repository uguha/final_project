import armchairBedsGeneral1 from './images/armchairs/armchair-beds/1/general.png';
import armchairBedsScheme1 from './images/armchairs/armchair-beds/1/scheme.png';
import fabricArmchairsGeneral1 from './images/armchairs/fabric-armchairs/1/general.png';
import fabricArmchairsScheme1 from './images/armchairs/fabric-armchairs/1/scheme.png';
import leatherArmchairsGeneral1 from './images/armchairs/leather-armchairs/1/general.png';
import leatherArmchairsScheme1 from './images/armchairs/leather-armchairs/1/scheme.png';

import chairsDiningChairsGeneral1 from './images/chairs/dining-chairs/1/general.png';
import chairsDiningChairsScheme1 from './images/chairs/dining-chairs/1/scheme.png';
import chairsDiningChairsGeneral2 from './images/chairs/dining-chairs/2/general.png';
import chairsDiningChairsScheme2 from './images/chairs/dining-chairs/2/scheme.png';
import chairsBarChairsGeneral1 from './images/chairs/bar-chairs/1/general.png';
import chairsBarChairsScheme1 from './images/chairs/bar-chairs/1/scheme.png';

import tablesDesksForHomeGeneral1 from './images/tables/desks-for-home/1/general.png';
import tablesDesksForHomeScheme1 from './images/tables/desks-for-home/1/scheme.png';
import tablesConferenceTablesGeneral1 from './images/tables/conference-tables/1/general.png';
import tablesConferenceTablesScheme1 from './images/tables/conference-tables/1/scheme.png';
import tablesExtendableTablesGeneral1 from './images/tables/extendable-tables/1/general.png';
import tablesxtendableTablesScheme1 from './images/tables/extendable-tables/1/scheme.png';

import bedsDoubleBedsGeneral1 from './images/beds/double-beds/1/general.png';
import bedsDoubleBedsScheme1 from './images/beds/double-beds/1/scheme.png';
import bedsDoubleBedsGeneral2 from './images/beds/double-beds/2/general.png';
import bedsDoubleBedsScheme2 from './images/beds/double-beds/2/scheme.png';
import bedsDoubleBedsGeneral3 from './images/beds/double-beds/3/general.png';
import bedsDoubleBedsScheme3 from './images/beds/double-beds/3/scheme.png';
import bedsDoubleBedsGeneral4 from './images/beds/double-beds/4/general.png';
import bedsDoubleBedsScheme4 from './images/beds/double-beds/4/scheme.png';
import bedsCotsBedsGeneral1 from './images/beds/cots/1/general.png';
import bedsCotsBedsScheme1 from './images/beds/cots/1/scheme.png';
import bedsLoftBedsGeneral1 from './images/beds/loft-beds/1/general.png';
import bedsLoftBedsScheme1 from './images/beds/loft-beds/1/scheme.png';
import bedsSingleBedsGeneral1 from './images/beds/single-beds/1/general.png';
import bedsSingleBedsScheme1 from './images/beds/single-beds/1/scheme.png';
import bedsSingleBedsGeneral2 from './images/beds/single-beds/2/general.png';
import bedsSingleBedsScheme2 from './images/beds/single-beds/2/scheme.png';
import bedsSofaBedsGeneral1 from './images/beds/sofa-beds/1/general.png';
import bedsSofaBedsScheme1 from './images/beds/sofa-beds/1/scheme.png';
import bedsSofaBedsGeneral2 from './images/beds/sofa-beds/2/general.png';
import bedsSofaBedsScheme2 from './images/beds/sofa-beds/2/scheme.png';

import wardrobesCornerWardrobesGeneral1 from './images/wardrobes/corner-wardrobes/1/general.png';
import wardrobesCornerWardrobesScheme1 from './images/wardrobes/corner-wardrobes/1/scheme.png';
import wardrobesMirroredWardrobesGeneral1 from './images/wardrobes/mirrored-wardrobes/1/general.png';
import wardrobesMirroredWardrobesScheme1 from './images/wardrobes/mirrored-wardrobes/1/scheme.png';
import wardrobesSolitaireWardrobesGeneral1 from './images/wardrobes/solitaire-wardrobes/1/general.png';
import wardrobesSolitaireWardrobesScheme1 from './images/wardrobes/solitaire-wardrobes/1/scheme.png';

export const subCategories = [
    {
        id: 1,
        category: 'armchair-beds',
        categoryName: 'Кресла-кровати',
        parentCategoryId: 1,
        photo: armchairBedsGeneral1
    },
    {
        id: 2,
        category: 'fabric-armchairs',
        categoryName: 'Тканевые кресла',
        parentCategoryId: 1,
        photo: fabricArmchairsGeneral1
    },
    {
        id: 3,
        category: 'leather-armchairs',
        categoryName: 'Кожаные кресла',
        parentCategoryId: 1,
        photo: leatherArmchairsGeneral1
    },
    {
        id: 4,
        category: 'dining-chairs',
        categoryName: 'Обеденные стулья',
        parentCategoryId: 2,
        photo: chairsDiningChairsGeneral2
    },
    {
        id: 5,
        category: 'bar-chairs',
        categoryName: 'Барные стулья',
        parentCategoryId: 2,
        photo: chairsBarChairsGeneral1
    },
    {
        id: 6,
        category: 'desks-for-home',
        categoryName: 'Столы для дома',
        parentCategoryId: 4,
        photo: tablesDesksForHomeGeneral1
    },
    {
        id: 7,
        category: 'conference-tables',
        categoryName: 'Столы для переговоров',
        parentCategoryId: 4,
        photo: tablesConferenceTablesGeneral1
    },
    {
        id: 8,
        category: 'extendable-tables',
        categoryName: 'Расширяемые столы',
        parentCategoryId: 4,
        photo: tablesExtendableTablesGeneral1
    },
    {
        id: 9,
        category: 'double-bads',
        categoryName: 'Двуспальные кровати',
        parentCategoryId: 3,
        photo: bedsDoubleBedsGeneral1
    },
    {
        id: 10,
        category: 'cots',
        categoryName: 'Детские кровати',
        parentCategoryId: 3,
        photo: bedsCotsBedsGeneral1
    },
    {
        id: 11,
        category: 'loft-beds',
        categoryName: 'Кровати-чердаки',
        parentCategoryId: 3,
        photo: bedsLoftBedsGeneral1
    },
    {
        id: 12,
        category: 'single-beds',
        categoryName: 'Односпальные кровати',
        parentCategoryId: 3,
        photo: bedsSingleBedsGeneral1
    },
    {
        id: 13,
        category: 'sofa-beds',
        categoryName: 'Диваны-кровати',
        parentCategoryId: 3,
        photo: bedsSofaBedsGeneral1
    },
    {
        id: 14,
        category: 'corner-wardrobes',
        categoryName: 'Угловые шкафы',
        parentCategoryId: 5,
        photo: wardrobesCornerWardrobesGeneral1
    },
    {
        id: 15,
        category: 'mirrored-wardrobes',
        categoryName: 'Шкафы с зеркалом',
        parentCategoryId: 5,
        photo: wardrobesMirroredWardrobesGeneral1
    },
    {
        id: 16,
        category: 'solitaire-wardrobe',
        categoryName: 'Шкафы-купе',
        parentCategoryId: 5,
        photo: wardrobesSolitaireWardrobesGeneral1
    }
]

export const categories = [
    {
        id: 1,
        category: 'armchairs',
        categoryName: 'Кресла',
        photo: leatherArmchairsGeneral1
    },
    {
        id: 2,
        category: 'chairs',
        categoryName: 'Стулья',
        photo: chairsDiningChairsGeneral1
    },
    {
        id: 3,
        category: 'beds',
        categoryName:'Кровати',
        photo: bedsDoubleBedsGeneral1
    },
    {
        id: 4,
        category: 'tables',
        categoryName: 'Столы',
        photo: tablesDesksForHomeGeneral1
    },
    {
        id: 5,
        category: 'wardrobes',
        categoryName: 'Шкафы',
        photo: wardrobesCornerWardrobesGeneral1
    }
]

export const products = [
    {
        id: 1,
        title: 'Кресло-кровать VALLENTUNA',
        photo: armchairBedsGeneral1,
        scheme: armchairBedsScheme1,
        subCategoryId: 1,
        price: 17999
    },
    {
        id: 2,
        title: 'Кресло SOLSTA OLARP',
        photo: fabricArmchairsGeneral1,
        scheme: fabricArmchairsScheme1,
        subCategoryId: 2,
        price: 9999
    },
    {
        id: 3,
        title: 'Кресло LANDSKRONA',
        photo: leatherArmchairsGeneral1,
        scheme: leatherArmchairsScheme1,
        subCategoryId: 3,
        price: 12999
    },
    {
        id: 4,
        title: 'Двуспальная кровать LEIRVIK',
        photo: bedsDoubleBedsGeneral1,
        scheme: bedsDoubleBedsScheme1,
        subCategoryId: 9,
        price: 14999
    },
    {
        id: 5,
        title: 'Стул EKEDALEN',
        photo: chairsDiningChairsGeneral1,
        scheme: chairsDiningChairsScheme1,
        subCategoryId: 4,
        price: 5999
    },
    {
        id: 6,
        title: 'Стул FANBYN',
        photo: chairsDiningChairsGeneral2,
        scheme: chairsDiningChairsScheme2,
        subCategoryId: 4,
        price: 5999
    },
    {
        id: 7,
        title: 'Стул BERGMUND',
        photo: chairsBarChairsGeneral1,
        scheme: chairsBarChairsScheme1,
        subCategoryId: 5,
        price: 8699
    },
    {
        id: 8,
        title: 'Стол ALEX',
        photo: tablesDesksForHomeGeneral1,
        scheme: tablesDesksForHomeScheme1,
        subCategoryId: 6,
        price: 8999
    },
     {
        id: 9,
        title: 'Стол IDÅSEN',
        photo: tablesConferenceTablesGeneral1,
        scheme: tablesConferenceTablesScheme1,
        subCategoryId: 7,
        price: 18999
    },
     {
        id: 10,
        title: 'Стол INGATORP',
        photo: tablesExtendableTablesGeneral1,
        scheme: tablesxtendableTablesScheme1,
        subCategoryId: 8,
        price: 23999
    },
    {
        id: 11,
        title: 'Шкаф PAX',
        photo: wardrobesCornerWardrobesGeneral1,
        scheme: wardrobesCornerWardrobesScheme1,
        subCategoryId: 14,
        price: 25650
    },
    {
        id: 12,
        title: 'Шкаф TYSSEDAL',
        photo: wardrobesMirroredWardrobesGeneral1,
        scheme: wardrobesMirroredWardrobesScheme1,
        subCategoryId: 15,
        price: 34999
    },
    {
        id: 13,
        title: 'Шкаф KLEPPSTAD',
        photo: wardrobesSolitaireWardrobesGeneral1,
        scheme: wardrobesSolitaireWardrobesScheme1,
        subCategoryId: 16,
        price: 12670
    },
    {
        id: 14,
        title: 'Двуспальная кровать NEIDEN',
        photo: bedsDoubleBedsGeneral2,
        scheme: bedsDoubleBedsScheme2,
        subCategoryId: 9,
        price: 4200
    },
    {
        id: 15,
        title: 'Двуспальная кровать SLATTUM',
        photo: bedsDoubleBedsGeneral3,
        scheme: bedsDoubleBedsScheme3,
        subCategoryId: 9,
        price: 13730
    },
    {
        id: 16,
        title: 'Двуспальная кровать TUFJORD',
        photo: bedsDoubleBedsGeneral4,
        scheme: bedsDoubleBedsScheme4,
        subCategoryId: 9,
        price: 53100
    },
    {
        id: 17,
        title: 'Детская кровать MYLLRA',
        photo: bedsCotsBedsGeneral1,
        scheme: bedsCotsBedsScheme1,
        subCategoryId: 10,
        price: 37160
    },
    {
        id: 18,
        title: 'Кровать-чердак STORÅ',
        photo: bedsLoftBedsGeneral1,
        scheme: bedsLoftBedsScheme1,
        subCategoryId: 11,
        price: 37160
    },
    {
        id: 19,
        title: 'Односпальная кровать MALM',
        photo: bedsSingleBedsGeneral1,
        scheme: bedsSingleBedsScheme1,
        subCategoryId: 12,
        price: 24900
    },
    {
        id: 20,
        title: 'Односпальная кровать NEIDEN',
        photo: bedsSingleBedsGeneral2,
        scheme: bedsSingleBedsScheme2,
        subCategoryId: 12,
        price: 3100
    },
    {
        id: 21,
        title: 'Диван-кровать FRIHETEN',
        photo: bedsSofaBedsGeneral1,
        scheme: bedsSofaBedsScheme1,
        subCategoryId: 13,
        price: 47800
    },
    {
        id: 22,
        title: 'Диван-кровать GRÖNLID',
        photo: bedsSofaBedsGeneral2,
        scheme: bedsSofaBedsScheme2,
        subCategoryId: 13,
        price: 87200
    },
]