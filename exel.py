import pandas


FILTR = []
RTI = []
REPAIR_KITS_AND_GASKETS = []
OTHER_ACCESSORIES = []
OTHER_AUTO = []
BEARINGS = []
OJSC_ZMZ = []
OAO_GAZ = []
OILS_AND_AUTOMOTIVE_CHEMICALS = []
TRANSFER_BOX = []
TRANSMISSION = []
KOREIA = []
KZMD = []
GAZ_UAZ_VAZ_ZIL = []
TIRES_DISCS = []
AUTO_LAMPS_AND_ELECTRICAL_EQUIPMENT = []
FIRST_CATEGORY = []


swich = 0


data = pandas.read_excel('ПРАЙС 04,10,22,.xlsx')


for i in data['Наименование товаров']:

    if i == 'ПЕРВАЯ КАТЕГОРИЯ':
        swich = 1
        continue

    if i == 'АВТОЛАМПЫ И ЭЛЕКТРООБОРУДОВАНИЕ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        FIRST_CATEGORY.append(i)


for i in data['Наименование товаров']:

    if i == 'АВТОЛАМПЫ И ЭЛЕКТРООБОРУДОВАНИЕ':
        swich = 1
        continue

    if i == 'АВТОШИНЫ,ДИСКИ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        AUTO_LAMPS_AND_ELECTRICAL_EQUIPMENT.append(i)


for i in data['Наименование товаров']:

    if i == 'АВТОШИНЫ,ДИСКИ':
        swich = 1
        continue

    if i == 'ГАЗ,УАЗ,ВАЗ,ЗИЛ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        TIRES_DISCS.append(i)


for i in data['Наименование товаров']:

    if i == 'ГАЗ,УАЗ,ВАЗ,ЗИЛ':
        swich = 1
        continue

    if i == 'КЗМД':
        break

    if swich == 0:
        continue
    elif swich == 1:
        GAZ_UAZ_VAZ_ZIL.append(i)


for i in data['Наименование товаров']:

    if i == 'КЗМД':
        swich = 1
        continue

    if i == 'КОРЕЯ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        KZMD.append(i)


for i in data['Наименование товаров']:

    if i == 'КОРЕЯ':
        swich = 1
        continue

    if i == 'КОРОБКА ПЕРЕДАЧ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        KOREIA.append(i)


for i in data['Наименование товаров']:

    if i == 'КОРОБКА ПЕРЕДАЧ':
        swich = 1
        continue

    if i == 'КОРОБКА РАЗДАТОЧНАЯ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        TRANSMISSION.append(i)


for i in data['Наименование товаров']:

    if i == 'КОРОБКА РАЗДАТОЧНАЯ':
        swich = 1
        continue

    if i == 'МАСЛА И АВТОХИМИЯ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        TRANSFER_BOX.append(i)


for i in data['Наименование товаров']:

    if i == 'МАСЛА И АВТОХИМИЯ':
        swich = 1
        continue

    if i == 'ОАО ГАЗ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        OILS_AND_AUTOMOTIVE_CHEMICALS.append(i)


for i in data['Наименование товаров']:

    if i == 'ОАО ГАЗ':
        swich = 1
        continue

    if i == 'ОАО ЗМЗ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        OAO_GAZ.append(i)


for i in data['Наименование товаров']:

    if i == 'ОАО ЗМЗ':
        swich = 1
        continue

    if i == 'ПОДШИПНИКИ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        OJSC_ZMZ.append(i)


for i in data['Наименование товаров']:

    if i == 'ОАО ЗМЗ':
        swich = 1
        continue

    if i == 'ПОДШИПНИКИ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        OJSC_ZMZ.append(i)


for i in data['Наименование товаров']:

    if i == 'ПОДШИПНИКИ':
        swich = 1
        continue

    if i == 'ПРОЧИЕ АВТО':
        break

    if swich == 0:
        continue
    elif swich == 1:
        BEARINGS.append(i)


for i in data['Наименование товаров']:

    if i == 'ПРОЧИЕ АВТО':
        swich = 1
        continue

    if i == 'ПРОЧИЕ ПРИНАДЛЕЖНОСТИ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        OTHER_AUTO.append(i)


for i in data['Наименование товаров']:

    if i == 'ПРОЧИЕ ПРИНАДЛЕЖНОСТИ':
        swich = 1
        continue

    if i == 'РЕМКОМПЛЕКТЫ И ПРОКЛАДКИ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        OTHER_ACCESSORIES.append(i)


for i in data['Наименование товаров']:

    if i == 'РЕМКОМПЛЕКТЫ И ПРОКЛАДКИ':
        swich = 1
        continue

    if i == 'РТИ':
        break

    if swich == 0:
        continue
    elif swich == 1:
        REPAIR_KITS_AND_GASKETS.append(i)


for i in data['Наименование товаров']:

    if i == 'РТИ':
        swich = 1
        continue

    if i == 'ФИЛЬТРА':
        break

    if swich == 0:
        continue
    elif swich == 1:
        RTI.append(i)


for i in data['Наименование товаров']:

    if i == 'ФИЛЬТРА':
        swich = 1
        continue

    if swich == 0:
        continue
    elif swich == 1:
        FILTR.append(i)




"""Распечатка категорий"""


# for i in FIRST_CATEGORY:
#     print(i)
# print()
# for i in AUTO_LAMPS_AND_ELECTRICAL_EQUIPMENT: -------------------------- categorii
#     print(i)
# print()
# for i in TIRES_DISCS:
#     print(i)
# print()
# for i in GAZ_UAZ_VAZ_ZIL:
#     print(i)
# print()
# for i in KZMD:
#     print(i)
# print()
# for i in KOREIA: -------------------------- categorii
#     print(i)
# print()
# for i in TRANSMISSION: 
#     print(i)
# print()
# for i in TRANSMISSION: 
#     print(i)
# print()
# for i in TRANSFER_BOX: 
#     print(i)
# print()
# for i in OILS_AND_AUTOMOTIVE_CHEMICALS:   -------------------------- categorii
#     print(i)
# print()
# for i in OAO_GAZ:
#     print(i)
# print()
# for i in OJSC_ZMZ:
#     print(i)
# print()
# for i in BEARINGS:
#     print(i)
# print()
# for i in OTHER_AUTO:
#     print(i)
# print()
# for i in OTHER_ACCESSORIES:
#     print(i)
# print()
# for i in REPAIR_KITS_AND_GASKETS:
#     print(i)
# print()
# for i in RTI:
#     print(i)
# print()
# for i in FILTR:
#     print(i)
# print()

