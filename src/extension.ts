'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let version = vscode.workspace.getConfiguration("statamicDocs").version;
    let baseUrl = version ? `https://statamic.dev/${version}/` : 'https://statamic.dev/';

    let statamicDocsAmp = vscode.commands.registerCommand('extension.statamicDocsAmp', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'amp'));
    });
    context.subscriptions.push(statamicDocsAmp);
    let statamicDocsAntlers = vscode.commands.registerCommand('extension.statamicDocsAntlers', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'antlers'));
    });
    context.subscriptions.push(statamicDocsAntlers);
    let statamicDocsAssets = vscode.commands.registerCommand('extension.statamicDocsAssets', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'assets'));
    });
    context.subscriptions.push(statamicDocsAssets);
    let statamicDocsAugmentation = vscode.commands.registerCommand('extension.statamicDocsAugmentation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'augmentation'));
    });
    context.subscriptions.push(statamicDocsAugmentation);
    let statamicDocsBlueprints = vscode.commands.registerCommand('extension.statamicDocsBlueprints', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'blueprints'));
    });
    context.subscriptions.push(statamicDocsBlueprints);
    let statamicDocsBuildABlog = vscode.commands.registerCommand('extension.statamicDocsBuildABlog', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'build-a-blog'));
    });
    context.subscriptions.push(statamicDocsBuildABlog);
    let statamicDocsBuildAPhotoGallery = vscode.commands.registerCommand('extension.statamicDocsBuildAPhotoGallery', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'build-a-photo-gallery'));
    });
    context.subscriptions.push(statamicDocsBuildAPhotoGallery);
    let statamicDocsCaching = vscode.commands.registerCommand('extension.statamicDocsCaching', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'caching'));
    });
    context.subscriptions.push(statamicDocsCaching);
    let statamicDocsCli = vscode.commands.registerCommand('extension.statamicDocsCli', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'cli'));
    });
    context.subscriptions.push(statamicDocsCli);
    let statamicDocsCollectionsAndEntries = vscode.commands.registerCommand('extension.statamicDocsCollectionsAndEntries', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'collections-and-entries'));
    });
    context.subscriptions.push(statamicDocsCollectionsAndEntries);
    let statamicDocsConditionalFields = vscode.commands.registerCommand('extension.statamicDocsConditionalFields', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'conditional-fields'));
    });
    context.subscriptions.push(statamicDocsConditionalFields);
    let statamicDocsConfiguration = vscode.commands.registerCommand('extension.statamicDocsConfiguration', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'configuration'));
    });
    context.subscriptions.push(statamicDocsConfiguration);
    let statamicDocsControllers = vscode.commands.registerCommand('extension.statamicDocsControllers', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'controllers'));
    });
    context.subscriptions.push(statamicDocsControllers);
    let statamicDocsCpTranslations = vscode.commands.registerCommand('extension.statamicDocsCpTranslations', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'cp-translations'));
    });
    context.subscriptions.push(statamicDocsCpTranslations);
    let statamicDocsDashboard = vscode.commands.registerCommand('extension.statamicDocsDashboard', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'dashboard'));
    });
    context.subscriptions.push(statamicDocsDashboard);
    let statamicDocsDebugging = vscode.commands.registerCommand('extension.statamicDocsDebugging', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'debugging'));
    });
    context.subscriptions.push(statamicDocsDebugging);
    let statamicDocsDeployYourFirstSite = vscode.commands.registerCommand('extension.statamicDocsDeployYourFirstSite', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'deploy-your-first-site'));
    });
    context.subscriptions.push(statamicDocsDeployYourFirstSite);
    let statamicDocsEmail = vscode.commands.registerCommand('extension.statamicDocsEmail', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'email'));
    });
    context.subscriptions.push(statamicDocsEmail);
    let statamicDocsExtending = vscode.commands.registerCommand('extension.statamicDocsExtending', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'extending'));
    });
    context.subscriptions.push(statamicDocsExtending);
    let statamicDocsFields = vscode.commands.registerCommand('extension.statamicDocsFields', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'fields'));
    });
    context.subscriptions.push(statamicDocsFields);
    let statamicDocsFieldsets = vscode.commands.registerCommand('extension.statamicDocsFieldsets', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'fieldsets'));
    });
    context.subscriptions.push(statamicDocsFieldsets);
    let statamicDocsFieldtypes = vscode.commands.registerCommand('extension.statamicDocsFieldtypes', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'fieldtypes'));
    });
    context.subscriptions.push(statamicDocsFieldtypes);
    let statamicDocsForms = vscode.commands.registerCommand('extension.statamicDocsForms', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'forms'));
    });
    context.subscriptions.push(statamicDocsForms);
    let statamicDocsFrontendOverview = vscode.commands.registerCommand('extension.statamicDocsFrontendOverview', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'frontend-overview'));
    });
    context.subscriptions.push(statamicDocsFrontendOverview);
    let statamicDocsGlobals = vscode.commands.registerCommand('extension.statamicDocsGlobals', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'globals'));
    });
    context.subscriptions.push(statamicDocsGlobals);
    let statamicDocsInstallation = vscode.commands.registerCommand('extension.statamicDocsInstallation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'installation'));
    });
    context.subscriptions.push(statamicDocsInstallation);
    let statamicDocsKnowledgeBase = vscode.commands.registerCommand('extension.statamicDocsKnowledgeBase', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'knowledge-base'));
    });
    context.subscriptions.push(statamicDocsKnowledgeBase);
    let statamicDocsLicensing = vscode.commands.registerCommand('extension.statamicDocsLicensing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'licensing'));
    });
    context.subscriptions.push(statamicDocsLicensing);
    let statamicDocsLivePreview = vscode.commands.registerCommand('extension.statamicDocsLivePreview', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'live-preview'));
    });
    context.subscriptions.push(statamicDocsLivePreview);
    let statamicDocsModifiers = vscode.commands.registerCommand('extension.statamicDocsModifiers', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'modifiers'));
    });
    context.subscriptions.push(statamicDocsModifiers);
    let statamicDocsMultiSite = vscode.commands.registerCommand('extension.statamicDocsMultiSite', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'multi-site'));
    });
    context.subscriptions.push(statamicDocsMultiSite);
    let statamicDocsNavigation = vscode.commands.registerCommand('extension.statamicDocsNavigation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'navigation'));
    });
    context.subscriptions.push(statamicDocsNavigation);
    let statamicDocsOauth = vscode.commands.registerCommand('extension.statamicDocsOauth', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'oauth'));
    });
    context.subscriptions.push(statamicDocsOauth);
    let statamicDocsPrinciples = vscode.commands.registerCommand('extension.statamicDocsPrinciples', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'principles'));
    });
    context.subscriptions.push(statamicDocsPrinciples);
    let statamicDocsProtectingContent = vscode.commands.registerCommand('extension.statamicDocsProtectingContent', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'protecting-content'));
    });
    context.subscriptions.push(statamicDocsProtectingContent);
    let statamicDocsQuickStart = vscode.commands.registerCommand('extension.statamicDocsQuickStart', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'quick-start'));
    });
    context.subscriptions.push(statamicDocsQuickStart);
    let statamicDocsRelationships = vscode.commands.registerCommand('extension.statamicDocsRelationships', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'relationships'));
    });
    context.subscriptions.push(statamicDocsRelationships);
    let statamicDocsRequirements = vscode.commands.registerCommand('extension.statamicDocsRequirements', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'requirements'));
    });
    context.subscriptions.push(statamicDocsRequirements);
    let statamicDocsRestApi = vscode.commands.registerCommand('extension.statamicDocsRestApi', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'rest-api'));
    });
    context.subscriptions.push(statamicDocsRestApi);
    let statamicDocsRevisions = vscode.commands.registerCommand('extension.statamicDocsRevisions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'revisions'));
    });
    context.subscriptions.push(statamicDocsRevisions);
    let statamicDocsRouting = vscode.commands.registerCommand('extension.statamicDocsRouting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'routing'));
    });
    context.subscriptions.push(statamicDocsRouting);
    let statamicDocsScreencasts = vscode.commands.registerCommand('extension.statamicDocsScreencasts', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'screencasts'));
    });
    context.subscriptions.push(statamicDocsScreencasts);
    let statamicDocsSearch = vscode.commands.registerCommand('extension.statamicDocsSearch', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'search'));
    });
    context.subscriptions.push(statamicDocsSearch);
    let statamicDocsStache = vscode.commands.registerCommand('extension.statamicDocsStache', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'stache'));
    });
    context.subscriptions.push(statamicDocsStache);
    let statamicDocsStaticCaching = vscode.commands.registerCommand('extension.statamicDocsStaticCaching', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'static-caching'));
    });
    context.subscriptions.push(statamicDocsStaticCaching);
    let statamicDocsStructures = vscode.commands.registerCommand('extension.statamicDocsStructures', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'structures'));
    });
    context.subscriptions.push(statamicDocsStructures);
    let statamicDocsTags = vscode.commands.registerCommand('extension.statamicDocsTags', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'tags'));
    });
    context.subscriptions.push(statamicDocsTags);
    let statamicDocsTaxonomies = vscode.commands.registerCommand('extension.statamicDocsTaxonomies', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'taxonomies'));
    });
    context.subscriptions.push(statamicDocsTaxonomies);
    let statamicDocsTemplateEngines = vscode.commands.registerCommand('extension.statamicDocsTemplateEngines', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'template-engines'));
    });
    context.subscriptions.push(statamicDocsTemplateEngines);
    let statamicDocsUpgradeGuide = vscode.commands.registerCommand('extension.statamicDocsUpgradeGuide', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'upgrade-guide'));
    });
    context.subscriptions.push(statamicDocsUpgradeGuide);
    let statamicDocsUsers = vscode.commands.registerCommand('extension.statamicDocsUsers', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'users'));
    });
    context.subscriptions.push(statamicDocsUsers);
    let statamicDocsVariables = vscode.commands.registerCommand('extension.statamicDocsVariables', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'variables'));
    });
    context.subscriptions.push(statamicDocsVariables);
    let statamicDocsVersionControl = vscode.commands.registerCommand('extension.statamicDocsVersionControl', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'version-control'));
    });
    context.subscriptions.push(statamicDocsVersionControl);
    let statamicDocsViewModels = vscode.commands.registerCommand('extension.statamicDocsViewModels', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'view-models'));
    });
    context.subscriptions.push(statamicDocsViewModels);
    let statamicDocsViews = vscode.commands.registerCommand('extension.statamicDocsViews', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'views'));
    });
    context.subscriptions.push(statamicDocsViews);
    let statamicDocsWritingStages = vscode.commands.registerCommand('extension.statamicDocsWritingStages', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'writing-stages'));
    });
    context.subscriptions.push(statamicDocsWritingStages);
    let statamicDocsYaml = vscode.commands.registerCommand('extension.statamicDocsYaml', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'yaml'));
    });
    context.subscriptions.push(statamicDocsYaml);

}