const state = () => ['wolny', 'rezerwacja', 'sprzedany'][Math.floor((Math.random() * 3))];
const tier = () => (Math.random() >= 0.5) ? 'parter' : 'piętro';
const garden = () => (Math.random() >= 0.5) ? 'ogródek' : 'strych';
const area = () => Math.floor(Math.random() *70) + 30;
const gardenArea = () => Math.floor(Math.random() *60) + 30;
const price = () => Math.floor(Math.random() *200000) + 200000;

function generateFlatData(amount) {
  const flats = [];
  for (let i = 1; i < amount; i++) {
    flats.push(
      {
        id: i,
        readableId: `P${i}${(Math.random() >= 0.5) ? 'A' : 'B'}`,
        tier: tier(),
        area: area(),
        garden: garden(),
        gardenArea: gardenArea(),
        price: price(),
        plan: `http://localhost:9000/#plan-${i}`,
        state: state(),
      }
    );
  }
  return flats;
}

let flatsData = generateFlatData(41);
let filteredData = flatsData;

function updateFlatData(data) {
  $('.table-record').remove();
  $.each(data, (k, v) => {
    $('#flats tbody').append(
      `<tr id="flat-${k}" class="table-group table-record">
      <td>${v.readableId}</td>
      <td>${v.tier}</td>
      <td>${v.area}m<sup>2</sup></td>
      <td>${v.garden} ${v.gardenArea}m<sup>2</sup></td>
      <td>${v.price} zł</td>
      <td><a href="${v.plan}">pobierz</a></td>
      <td class="${getStateColor(v.state)}">${v.state}</td>
      </tr>`)
    });
    paginate();
  }

  function getStateColor(state) {
    switch (state) {
      case "rezerwacja":
        return "u-gray-color";
        break;
      case "wolny":
        return "u-green-color";
        break;
      case "sprzedany":
        return "u-brown-color";
        break;
    }
  }

  function flatFiler(floor, garden, state, price) {
    let filtered = flatsData;
    if (floor.length && !floor.includes('')) {
      filtered = filtered.filter(flat => floor.includes(flat.tier));
    }
    if (state.length && !state.includes('')) {
      filtered = filtered.filter(flat => state.includes(flat.state));
    }
    if (garden.length && !garden.includes('')) {
      filtered = filtered.filter(flat => garden.includes(flat.garden));
    }
    if (price.length && !price.includes('')) {
      const prices = _.union(
        ...price.map(
          filter => {
           return filter
             .replace(' zł', '')
             .split('-')
             .map((item) => {
                return parseInt(item)
              }
            )
           }
          )
        );
        filtered = filtered.filter(flat => (flat.price > Math.min(...prices) && flat.price < Math.max(...prices)));
    }
    return filtered;
  }

$(document).ready(() => {
  updateFlatData(flatsData);

  $('#filter-list').on('click', () => {
    const data = flatFiler(
      ($("#tier-filter").attr('aplied-filters')).split(','),
      ($("#garden-filter").attr('aplied-filters')).split(','),
      ($("#state-filter").attr('aplied-filters')).split(','),
      ($("#price-filter").attr('aplied-filters')).split(',')
    )
    updateFlatData(data);
  });

  $('.filter__checkbox').on('click', function() {
    const filter = [];
    const parent = $(this).closest(".filter__option");
    parent.find('.filter__checkbox').each((k, v) => {
      if($(v).prop('checked')) {
        filter.push($(v).val());
      }
    });
    parent.attr('aplied-filters', filter);
  });
});
