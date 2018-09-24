import DS from 'ember-data';

export default DS.Model.extend({
	stok			: DS.attr('string'),
	status			: DS.attr('string'),
	tgl_pinjam		: DS.attr('date'),
});
