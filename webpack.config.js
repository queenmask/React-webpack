var webpack = require('webpack');
//__dirname��node.js�е�һ��ȫ�ֱ�������ָ��ǰִ�нű����ڵ�Ŀ¼
module.exports = {//ע��������exports����export
	devtool: 'eval-source-map',//����Source Maps,����ѡ��eval-source-map
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],//Ψһ����ļ�������Java�е�main����
    output: {//���Ŀ¼
        path: __dirname + "/build",//������js�ļ���ŵĵط�
        filename: "bundle.js"//������js�ļ���
    },
   module: {
        //loaders������
        loaders: [
            {
                test: /\.(js|jsx)$/,//һ��ƥ��loaders��������ļ�����չ����������ʽ����������ƥ��js��jsx�ļ������룩
                exclude: /node_modules/,//���β���Ҫ������ļ����ļ��У�����ѡ��
                loader: 'babel-loader'//loader�����ƣ����룩
            }
        ]
    },
	 plugins: [
        new webpack.HotModuleReplacementPlugin()//��ģ���滻���
    ],
    //webpack-dev-server����
    devServer: {
        contentBase: './build',//Ĭ��webpack-dev-server��Ϊ���ļ����ṩ���ط������������Ϊ����һ��Ŀ¼�µ��ļ��ṩ���ط�������Ӧ������������������Ŀ¼���������õ�"build"Ŀ¼��
        //colors: true,//��cmd�ն��������ɫ��־
        historyApiFallback: true,//�ڿ�����ҳӦ��ʱ�ǳ����ã���������HTML5 history API���������Ϊtrue�����е���ת��ָ��index.html
        //inline: true,//����Ϊtrue����Դ�ļ��ı�ʱ���Զ�ˢ��ҳ��
        port: 8888,//����Ĭ�ϼ����˿ڣ����ʡ�ԣ�Ĭ��Ϊ"8080"
       // process: true,//��ʾ�ϲ��������
    }
}