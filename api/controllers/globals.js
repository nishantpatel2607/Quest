module.exports.splitArray = function(input,delimiter){
	var output;
	if (input && input.length>0)
	{
		output = input.split(delimiter);
	}
	else
	{
		output = [];
	}
	return output;
};