/*global appServices, $*/
appServices.factory('urlService', ['domService', function (domService) {
    "use strict";

    var controllers = {
            Sprawozdania: 'Sprawozdania',
            Sprawozdanie: 'Sprawozdanie',
            ConsolidatedReport: 'ConsolidatedReport',
            VatRegistries: 'InvoiceVatRegistry',
            Parameters: 'Parameters',
            Dictionary: 'Dictionary',
            ReportItems: 'ReportItems',
            SprawozdaniaZbiorcze: 'SprawozdaniaZbiorcze',
            SprawozdanieEditor: 'SprawozdanieEditor',
            Wnioski: 'Wnioski',
            Proposition: 'Proposition',
            PropositionExport: 'PropositionExport',
            VatPeriods: 'VatPeriods',
            VatTypes: 'VatTypes',
            PropositionTypes: 'PropositionTypes'
        },

        getBasePath = function () {
            return domService.getBasePath;
        },

        createUrl = function (ctrlName, actionName) {
            return getBasePath() + ctrlName + '/' + actionName;
        },

        getIdFromUrl = function () {
            var elems = window.location.href.split("/");
            return elems[elems.length-1];
        };

    return {
        getIdFromUrl: getIdFromUrl,
        getBasePath: getBasePath(),
        sprawozdania: {
            fillGrid: createUrl(controllers.Sprawozdania, "FillGrid"),
            refreshGrid: createUrl(controllers.Sprawozdania, "RefreshGrid"),
            columnPodmiotyList: createUrl(controllers.Sprawozdania, "GetPodmiotyDistinctList"),
            columnTypSprList: createUrl(controllers.Sprawozdania, "GetTypSprDistinctList"),
            columnStatusList: createUrl(controllers.Sprawozdania, "GetStatusDistinctList"),
            columnTypList: createUrl(controllers.Sprawozdania, "GetTypSprDistinctList"),
            columnLataList: createUrl(controllers.Sprawozdania, "GetLataDistinctList"),
            columnMiesiacList: createUrl(controllers.Sprawozdania, "GetMiesiacDistinctList"),
            hierarchicalTreeData: createUrl(controllers.Sprawozdania, "HierarchicalTreeSprawozdania"),
            index: createUrl(controllers.Sprawozdania, "Index")
        },
        sprawozdanie: {
            getModel: createUrl(controllers.Sprawozdanie, "GetModel"),
            getStatusModel: createUrl(controllers.Sprawozdanie, "GetStatusModel"),
            index: createUrl(controllers.Sprawozdanie, "Index"),
            importXml: createUrl(controllers.Sprawozdanie, "ImportXml"),
            importRows: createUrl(controllers.Sprawozdanie, "ImportRows"),
            cancelReportChanges: createUrl(controllers.Sprawozdanie, "CancelReportChanges"),
            saveReport: createUrl(controllers.Sprawozdanie, "SaveReport"),
            reportStatusDecrease: createUrl(controllers.Sprawozdanie, "StatusDec"),
            reportStatusIncrease: createUrl(controllers.Sprawozdanie, "StatusInc"),
            clearReportCache: createUrl(controllers.Sprawozdanie, "ClearReportCache"),
            removeReport: createUrl(controllers.Sprawozdanie, "Remove"),
            verifyReportMonthly: createUrl(controllers.Sprawozdanie, "VerifyReportMonthly"),
            verifyReportQuarterly: createUrl(controllers.Sprawozdanie, "VerifyReportQuarterly"),
            printMonthlyVerificationReport: createUrl(controllers.Sprawozdanie, "PrintMonthlyVerificationReport"),
            printQuarterlyVerificationReport: createUrl(controllers.Sprawozdanie, "PrintQuarterlyVerificationReport"),
            correctReport: createUrl(controllers.Sprawozdanie, "CorrectReport"),
            getVersionIdent: createUrl(controllers.Sprawozdanie, "GetVersionIdent")
        },
        consolidatedReport: {
            getModel: createUrl(controllers.ConsolidatedReport, "GetModel"),
            getStatusModel: createUrl(controllers.ConsolidatedReport, "GetStatusModel"),
            getUnitName: createUrl(controllers.ConsolidatedReport, "GetUnitName"),
            index: createUrl(controllers.ConsolidatedReport, "Index"),
            cancelReportChanges: createUrl(controllers.ConsolidatedReport, "CancelReportChanges"),
            saveReport: createUrl(controllers.ConsolidatedReport, "SaveReport"),
            clearReportCache: createUrl(controllers.ConsolidatedReport, "ClearReportCache"),
            printReport: createUrl(controllers.ConsolidatedReport, "Print"),
            exportReport: createUrl(controllers.ConsolidatedReport, "Export"),
            countConsolidatedReport: createUrl(controllers.ConsolidatedReport, "CountConsolidatedReport"),
            getReportItems: createUrl(controllers.ConsolidatedReport, 'GetReportItems'),
            reportStatusDecrease: createUrl(controllers.ConsolidatedReport, "StatusDec"),
            reportStatusIncrease: createUrl(controllers.ConsolidatedReport, "StatusInc"),
            correctReport: createUrl(controllers.ConsolidatedReport, "CorrectReport"),
            getVersionIdent: createUrl(controllers.ConsolidatedReport, "GetVersionIdent")
        },
        vatRegistries: {
            invoices: createUrl(controllers.VatRegistries, 'VatInvoices'),
            saveInvoice: createUrl(controllers.VatRegistries, 'Save'),
            deleteInvoice: createUrl(controllers.VatRegistries, 'Delete'),
            validateVatPeriod: createUrl(controllers.VatRegistries, 'ValidateVatPeriod'),
            registries: createUrl(controllers.VatRegistries, 'Registries'),
            nipSearch: createUrl(controllers.VatRegistries, 'NipSearch'),
            vatValues: createUrl(controllers.VatRegistries, 'VatRates'),
            countries: createUrl(controllers.VatRegistries, 'Countries'),
            importVat: createUrl(controllers.VatRegistries, "ImportVat"),
            getVatPeriods: createUrl(controllers.VatRegistries, "GetVatPeriods"),
            vatTypes: createUrl(controllers.VatRegistries, 'GetVatTypes')

        },
        parameters: {
            budzetParamsList: createUrl(controllers.Parameters, 'GetBudzetParameters'),
            reportFiltersList: createUrl(controllers.Parameters, 'GetReportsFilters')
        },
        dictionary: {
            getDistinctDictionary: createUrl(controllers.Dictionary, 'GetDistinctDictionary')
        },
        reportItems: {
            getReportItems: createUrl(controllers.ReportItems, 'GetReportItems'),
            getToolTip: createUrl(controllers.ReportItems, 'GetToolTip'),
            saveReportItems: createUrl(controllers.ReportItems, 'SaveReportItems'),
            deleteReportItems: createUrl(controllers.ReportItems, 'DeleteReportItems'),
            printReport: createUrl(controllers.ReportItems, "Print"),
            columnMenuDescription: createUrl(controllers.ReportItems, 'GetColumnMenuDescription'),
            columnMenuAction: createUrl(controllers.ReportItems, 'ColumnMenuAction'),
            getReportPrintSchemas: createUrl(controllers.ReportItems, "GetReportPrintSchemas")
        },
        sprawozdaniaZbiorcze: {
            hierarchicalTreeSprawozdania: createUrl(controllers.SprawozdaniaZbiorcze, 'HierarchicalTreeSprawozdania'),
            createNew: createUrl(controllers.SprawozdaniaZbiorcze, "CreateNew"),
            fillGrid: createUrl(controllers.SprawozdaniaZbiorcze, "FillGrid"),
            index: createUrl(controllers.SprawozdaniaZbiorcze, "Index"),
            columnTypList: createUrl(controllers.SprawozdaniaZbiorcze, "GetTypSprDistinctList"),
            columnStatusList: createUrl(controllers.SprawozdaniaZbiorcze, "GetStatusDistinctList"),
            columnMiesiacList: createUrl(controllers.SprawozdaniaZbiorcze, "GetMiesiacDistinctList"),
            columnLataList: createUrl(controllers.SprawozdaniaZbiorcze, "GetLataDistinctList")
        },
        sprawozdanieEditor: {
            index: createUrl(controllers.SprawozdanieEditor, "Index"),
            getConsolidatedReportEditor: createUrl(controllers.SprawozdanieEditor, "GetConsolidatedReportEditor")
        },
        wnioski: {
            index: createUrl(controllers.Wnioski, "Index"),
            hierarchicalTreeWnioski: createUrl(controllers.Wnioski, "FillTree"),
            getStatusDistinctList: createUrl(controllers.Wnioski, "GetStatusDistinctList"),
            getPodmiotyDistinctList: createUrl(controllers.Wnioski, "GetPodmiotyDistinctList"),
            getTypSprDistinctList: createUrl(controllers.Wnioski, "GetTypSprDistinctList"),
            getMiesiacDistinctList: createUrl(controllers.Wnioski, "GetMiesiacDistinctList"),
            getLataDistinctList: createUrl(controllers.Wnioski, "GetLataDistinctList"),
            fillGrid: createUrl(controllers.Wnioski, "FillGrid")
        },
        proposition: {
            index: createUrl(controllers.Proposition, "Index"),
            getModel: createUrl(controllers.Proposition, "GetModel"),
            getStatusModel: createUrl(controllers.Proposition, "GetStatusModel"),
            indexCreate: createUrl(controllers.Proposition, "Create"),
            createProposition: createUrl(controllers.Proposition, "CreateProposition"),
            getPropositionTypes: createUrl(controllers.Proposition, "GetPropositionTypes"),
            getYears: createUrl(controllers.Proposition, "GetYears"),
            getMonths: createUrl(controllers.Proposition, "GetMonths"),
            getPropositionBody: createUrl(controllers.Proposition, "GetPropositionBody"),
            saveBody: createUrl(controllers.Proposition, "SaveBody"),
            saveProposition: createUrl(controllers.Proposition, "SaveProposition"),
            printReport: createUrl(controllers.Proposition, "Print"),
            importPlan: createUrl(controllers.Proposition, "ImportPropositionBudgetPlan"),
            statusDecrease: createUrl(controllers.Proposition, "StatusDec"),
            statusIncrease: createUrl(controllers.Proposition, "StatusInc"),
            clearPropositionCache: createUrl(controllers.Proposition, "ClearPropositionCache"),
            getToolTip: createUrl(controllers.Proposition, 'GetToolTip'),
            removeProposition: createUrl(controllers.Proposition, "RemoveProposition")
        },
        propositionTypes: {
            index: createUrl(controllers.PropositionTypes, "Index"),
            getItems: createUrl(controllers.PropositionTypes, "GetItems"),
            createTypes: createUrl(controllers.PropositionTypes, "CreatePropositionTypes")
        },
        propositionExport: {
            index: createUrl(controllers.PropositionExport, "Index"),
            getPlanHeaders: createUrl(controllers.PropositionExport, "GetPlanHeaders"),
            export: createUrl(controllers.PropositionExport, "Export"),
            newPlanIndex: createUrl(controllers.PropositionExport, "NewPlan"),
            savePlan: createUrl(controllers.PropositionExport, "SavePlan"),
            getPodrejestryDictionary: createUrl(controllers.PropositionExport, "GetPodrejestryDictionary"),
            getPlanHeader: createUrl(controllers.PropositionExport, "GetPlanHeader"),
            getPlanBody: createUrl(controllers.PropositionExport, "GetPlanBody"),
            detailIndex: createUrl(controllers.PropositionExport, "DetailIndex")
        },
        vatPeriods: {
            index: createUrl(controllers.VatPeriods, 'Index'),
            getUnits: createUrl(controllers.VatPeriods, 'GetUnits'),
            addPeriod: createUrl(controllers.VatPeriods, 'AddPeriod'),
            closePeriod: createUrl(controllers.VatPeriods, 'CloseVatPeriod'),
            setVatPeriodStatus: createUrl(controllers.VatPeriods, 'SetVatPeriodStatus')
        },
        vatTypes: {
            index: createUrl(controllers.VatTypes, 'Index'),
            save: createUrl(controllers.VatTypes, 'Save'),
            delete: createUrl(controllers.VatTypes, 'Delete'),
            getItems: createUrl(controllers.VatTypes, 'GetItems')
        }
    };
}]);
