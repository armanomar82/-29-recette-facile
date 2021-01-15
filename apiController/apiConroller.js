const Api = require('./../models/apiModel');

exports.getAllApi = async (req,res) => {

    try{
        // BUILD query
        //1 Filtering
        const queryObj = {...req.query};
        const excludedFields = ['page','sort','limit','fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        //2 advanc Filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match =>`$${match}`);

        const query = Api.find(JSON.parse(queryStr));

        //Execute Query
        const apis = await query;

        res.status(200).json({ 
            status : 'saccses',
            results : tours.length,
            data :{
                apis
            }
        });
    }catch (err){
        res.status(404).json({
            status : 'faild',
            message: err
        })

    }
};

exports.getApi = async(req,res) => {

    try{
        const tour = await Tour.findById(req.params.id);

        res.status(200).json({ 
            status : 'saccses',
            data :{
                api
            }
        });
    } catch (err){
        res.status(404).json({
            status : 'faild',
            message: err
        });
    }
}

exports.creatApi = async(req,res) => {

    try{
        const newTour = await Tour.create(req.body);

        res.status(201).json({ 
            status : 'saccsess',
            data : { 
                api : newApi
            }
        });
    } catch(err){
        res.status(400).json({
            status : 'faild',
            message: err
        });
    }
};

exports.UpdateApi = async(req,res) => {

    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{
            new :true,
            runValidators : true
        });
        res.status(200).json({
            status : 'saccsess',
            data : { 
                api 
            }
        });
    } catch (err){
        res.status(400).json({
            status : 'faild',
            message: 'Invalid data send!'
        });
    }
};

exports.deleteApi = async(req,res) => {

    try{
        await Tour.findByIdAndDelete(req.params.id);
        
        res.status(204).json({
            status : 'saccsess',
            data : null
        });
    } catch(err) {
        res.status(400).json({
            status : 'faild',
            message: 'Invalid data send!'
        });
    }
};