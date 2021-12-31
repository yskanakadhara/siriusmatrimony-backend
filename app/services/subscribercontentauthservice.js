import db from "../models/main.js";

const Subscribercontentauth001wb = db.subscribercontentauth001wb

export const list = async(req, res) => {
    Subscribercontentauth001wb.find(function(err, subscribercontentauth001wbs) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontentauth001wb.',
                error: err
            });
        }

        return res.json(subscribercontentauth001wbs);
    });
};

export const show = (req, res) => {
    var id = req.params.id;

    Subscribercontentauth001wb.findOne({ _id: id }, function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontentauth001wb.',
                error: err
            });
        }

        if (!subscribercontentauth001wb) {
            return res.status(404).json({
                message: 'No such subscribercontentauth001wb'
            });
        }

        return res.json(subscribercontentauth001wb);
    });
};

export const create = async(req, res) => {
    var subscribercontentauth001wb = new Subscribercontentauth001wb({
        subscid: req.body.subscid,
        subscsubpid: req.body.subscsubpid,
        subscsubpstatus: req.body.subscsubpstatus,
        subscsubpstartdate: req.body.subscsubpstartdate,
        subscsupbenddate: req.body.subscsupbenddate,
        inserteduser: req.body.inserteduser,
        inserteddatetime: req.body.inserteddatetime,
        updateduser: req.body.updateduser,
        updateddatetime: req.body.updateddatetime
    });

    subscribercontentauth001wb.save(function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when creating subscribercontentauth001wb',
                error: err
            });
        }

        return res.status(201).json(subscribercontentauth001wb);
    });
};

export const update = (req, res) => {
    var id = req.params.id;

    Subscribercontentauth001wb.findOne({ _id: id }, function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting subscribercontentauth001wb',
                error: err
            });
        }

        if (!subscribercontentauth001wb) {
            return res.status(404).json({
                message: 'No such subscribercontentauth001wb'
            });
        }

        subscribercontentauth001wb.subscid = req.body.subscid ? req.body.subscid : subscribercontentauth001wb.subscid;
        subscribercontentauth001wb.subscsubpid = req.body.subscsubpid ? req.body.subscsubpid : subscribercontentauth001wb.subscsubpid;
        subscribercontentauth001wb.subscsubpstatus = req.body.subscsubpstatus ? req.body.subscsubpstatus : subscribercontentauth001wb.subscsubpstatus;
        subscribercontentauth001wb.subscsubpstartdate = req.body.subscsubpstartdate ? req.body.subscsubpstartdate : subscribercontentauth001wb.subscsubpstartdate;
        subscribercontentauth001wb.subscsupbenddate = req.body.subscsupbenddate ? req.body.subscsupbenddate : subscribercontentauth001wb.subscsupbenddate;
        subscribercontentauth001wb.inserteduser = req.body.inserteduser ? req.body.inserteduser : subscribercontentauth001wb.inserteduser;
        subscribercontentauth001wb.inserteddatetime = req.body.inserteddatetime ? req.body.inserteddatetime : subscribercontentauth001wb.inserteddatetime;
        subscribercontentauth001wb.updateduser = req.body.updateduser ? req.body.updateduser : subscribercontentauth001wb.updateduser;
        subscribercontentauth001wb.updateddatetime = req.body.updateddatetime ? req.body.updateddatetime : subscribercontentauth001wb.updateddatetime;

        subscribercontentauth001wb.save(function(err, subscribercontentauth001wb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating subscribercontentauth001wb.',
                    error: err
                });
            }

            return res.json(subscribercontentauth001wb);
        });
    });
};

export const remove = (req, res) => {
    var id = req.params.id;

    Subscribercontentauth001wb.findByIdAndRemove(id, function(err, subscribercontentauth001wb) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the subscribercontentauth001wb.',
                error: err
            });
        }

        return res.status(204).json();
    });
};